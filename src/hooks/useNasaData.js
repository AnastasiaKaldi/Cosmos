import { useState, useEffect } from "react";

// -------------------------------------------------------------------
// NASA / JPL data hooks for live celestial body information.
//
// - Planets & dwarf planets:  JPL Horizons API (no key needed)
// - Exoplanets:               NASA Exoplanet Archive TAP (no key needed)
// - Stars & galaxies:         No clean NASA JSON API exists — we return
//                             null so the UI can fall back to local data.
// -------------------------------------------------------------------

// JPL Horizons command IDs for our solar-system bodies
const HORIZONS_IDS = {
  mercury: 199,
  venus: 299,
  earth: 399,
  mars: 499,
  jupiter: 599,
  saturn: 699,
  uranus: 799,
  neptune: 899,
  sun: 10,
};

// NASA Exoplanet Archive names (as they appear in the `pl_name` column)
const EXOPLANET_NAMES = {
  "kepler-186f": "Kepler-186 f",
  "proxima-centauri-b": "Proxima Cen b",
  "51-pegasi-b": "51 Peg b",
};

// Simple per-session cache keyed by slug
const cache = {};

// -------------------------------------------------------------------
// Parse the Horizons text blob into a clean key-value map.
// The format is semi-structured: "Label = value   Label2 = value2"
// spread across multiple lines.
// -------------------------------------------------------------------
function parseHorizonsText(text) {
  const data = {};

  // Helper: find a value by regex, return trimmed string or null
  const extract = (label, regex) => {
    const m = text.match(regex);
    if (m) data[label] = m[1].trim();
  };

  // Mass
  extract("mass", /Mass\s*x\s*10\^(\d+)\s*\(kg\)\s*=\s*([\d.]+)/);
  const massMatch = text.match(/Mass\s*x\s*10\^(\d+)\s*\(kg\)\s*=\s*([\d.]+)/);
  if (massMatch) {
    data.mass = `${massMatch[2]} × 10^${massMatch[1]} kg`;
  }
  // Fallback for "Mass x10^24"
  const massMatch2 = text.match(/Mass\s*x10\^(\d+)\s*\(kg\)\s*=\s*([\d.]+)/);
  if (massMatch2 && !data.mass) {
    data.mass = `${massMatch2[2]} × 10^${massMatch2[1]} kg`;
  }

  // Radius
  const radiusMatch = text.match(/Vol\.\s*Mean\s*Radius\s*\(km\)\s*=\s*([\d.]+)/);
  if (radiusMatch) data.meanRadius = `${radiusMatch[1]} km`;

  const eqRadius = text.match(/Equ(?:at)?\.\s*radius[^=]*=\s*([\d.]+)/);
  if (eqRadius) data.equatorialRadius = `${eqRadius[1]} km`;

  // Density
  const density = text.match(/Density[^=]*=\s*([\d.]+)/);
  if (density) data.density = `${density[1]} g/cm³`;

  // Gravity
  const gravity = text.match(/(?:Equ\.\s*grav|g_e)[^=]*=\s*([\d.]+)/);
  if (gravity) data.gravity = `${gravity[1]} m/s²`;

  // Escape velocity
  const escape = text.match(/Escape\s*(?:speed|velocity)[^=]*=\s*([\d.]+)/);
  if (escape) data.escapeVelocity = `${escape[1]} km/s`;

  // Sidereal rotation period
  const rotPeriod = text.match(/Sid\.\s*rot\.\s*period[^=]*=\s*([^\n]+)/);
  if (rotPeriod) data.rotationPeriod = rotPeriod[1].trim().replace(/\s{2,}/g, " ");

  // Sidereal orbital period
  const orbPeriodY = text.match(/Sidereal\s*orb(?:it)?\s*period\s*=\s*([\d.]+)\s*y/);
  if (orbPeriodY) data.orbitalPeriod = `${orbPeriodY[1]} years`;

  const orbPeriodD = text.match(/Sidereal\s*orb(?:it)?\s*period\s*=\s*([\d.]+)\s*d/);
  if (orbPeriodD) data.orbitalPeriodDays = `${orbPeriodD[1]} days`;

  // Mean orbit speed
  const orbitSpeed = text.match(/(?:Mean\s*)?orbit\s*speed[^=]*=\s*([\d.]+)/i);
  if (orbitSpeed) data.orbitalSpeed = `${orbitSpeed[1]} km/s`;

  // Surface temp
  const surfTemp = text.match(/Mean\s*surface\s*temp[^=]*=\s*([\d.]+)/);
  if (surfTemp) data.surfaceTemp = `${surfTemp[1]} K`;

  // Atmos temp (gas giants)
  const atmosTemp = text.match(/Atmos\.\s*temp\.\s*\(1\s*bar\)[^=]*=\s*([\d.]+)/);
  if (atmosTemp) data.atmosTemp = `${atmosTemp[1]} K`;

  // Geometric albedo
  const albedo = text.match(/Geometric\s*[Aa]lbedo\s*=\s*([\d.]+)/);
  if (albedo) data.albedo = albedo[1];

  // Obliquity
  const obliquity = text.match(/Obliquity\s*to\s*orbit[^=]*=\s*([\d.]+)/);
  if (obliquity) data.obliquity = `${obliquity[1]}°`;

  // Solar constant
  const solarConst = text.match(/Solar\s*Constant[^=]*=\s*([\d.]+)\s*\(mean\)/);
  if (solarConst) data.solarConstant = `${solarConst[1]} W/m²`;

  // Flattening
  const flat = text.match(/Flattening\s*=\s*([\d./]+)/);
  if (flat) data.flattening = flat[1];

  return data;
}

// -------------------------------------------------------------------
// Parse exoplanet archive JSON into our display format
// -------------------------------------------------------------------
function parseExoplanetData(rows) {
  if (!rows || rows.length === 0) return null;

  // Take the first row with the most data
  const best = rows.reduce((a, b) => {
    const aCount = Object.values(a).filter((v) => v != null).length;
    const bCount = Object.values(b).filter((v) => v != null).length;
    return bCount > aCount ? b : a;
  });

  const data = {};

  if (best.pl_radj != null)
    data.radius = `${(best.pl_radj * 11.209).toFixed(2)} Earth radii`;
  if (best.pl_bmassj != null)
    data.mass = `${(best.pl_bmassj * 317.8).toFixed(2)} Earth masses`;
  if (best.pl_orbper != null)
    data.orbitalPeriod = `${best.pl_orbper.toFixed(2)} days`;
  if (best.pl_orbsmax != null)
    data.semiMajorAxis = `${best.pl_orbsmax.toFixed(4)} AU`;
  if (best.disc_year != null) data.discoveryYear = `${best.disc_year}`;
  if (best.discoverymethod) data.discoveryMethod = best.discoverymethod;
  if (best.sy_dist != null)
    data.distance = `${best.sy_dist.toFixed(1)} parsecs`;
  if (best.pl_eqt != null) data.eqTemp = `${best.pl_eqt.toFixed(0)} K`;
  if (best.st_teff != null) data.hostStarTemp = `${best.st_teff.toFixed(0)} K`;
  if (best.st_spectype) data.hostStarType = best.st_spectype;
  if (best.pl_insol != null)
    data.insolation = `${best.pl_insol.toFixed(2)} Earth flux`;

  return data;
}

// -------------------------------------------------------------------
// Fetchers
// -------------------------------------------------------------------
async function fetchHorizons(slug) {
  const id = HORIZONS_IDS[slug];
  if (!id) return null;

  const url = `https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND=${id}&OBJ_DATA=YES&MAKE_EPHEM=NO`;
  const res = await fetch(url);
  if (!res.ok) return null;

  const json = await res.json();
  return parseHorizonsText(json.result || "");
}

async function fetchExoplanet(slug) {
  const name = EXOPLANET_NAMES[slug];
  if (!name) return null;

  const query = encodeURIComponent(
    `SELECT pl_name,pl_bmassj,pl_radj,pl_orbper,pl_orbsmax,disc_year,discoverymethod,sy_dist,pl_eqt,st_teff,st_spectype,pl_insol FROM ps WHERE pl_name='${name}'`
  );
  const url = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=${query}&format=json`;
  const res = await fetch(url);
  if (!res.ok) return null;

  const rows = await res.json();
  return parseExoplanetData(rows);
}

// -------------------------------------------------------------------
// Public hook
// -------------------------------------------------------------------
export function useNasaData(slug, category) {
  const [data, setData] = useState(cache[slug] || null);
  const [loading, setLoading] = useState(!cache[slug]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cache[slug]) return;

    let cancelled = false;

    const run = async () => {
      try {
        let result = null;

        if (category === "Planet" || slug === "sun") {
          result = await fetchHorizons(slug);
        } else if (category === "Exoplanet") {
          result = await fetchExoplanet(slug);
        }
        // Stars (other than Sun) and galaxies — no NASA API, return null.

        if (cancelled) return;
        if (result && Object.keys(result).length > 0) {
          cache[slug] = result;
          setData(result);
        }
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();
    return () => { cancelled = true; };
  }, [slug, category]);

  return { data, loading, error };
}
