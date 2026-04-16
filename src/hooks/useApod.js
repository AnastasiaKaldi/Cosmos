import { useState, useEffect } from "react";

// NASA Astronomy Picture of the Day.
// Uses DEMO_KEY by default (30 req/hr) — swap in your own key via
// VITE_NASA_API_KEY in .env for higher limits.
const API_KEY = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

// Simple session cache so navigating back to Home doesn't re-fetch.
let cache = null;

export function useApod() {
  const [data, setData] = useState(cache);
  const [loading, setLoading] = useState(!cache);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cache) return;

    let cancelled = false;

    fetch(APOD_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`NASA API ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (cancelled) return;
        cache = json;
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}
