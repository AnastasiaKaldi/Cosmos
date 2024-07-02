import "./App.css";
import solar from "../dist/public/solar.mp4";

function App() {
  return (
    <div className="App">
      <h1 className="home text-indigo-950 text-8xl justify-center items-center">
        Welcome
        <span className="text-9xl">to the Cosmos</span>
      </h1>
      <video autoPlay loop muted className="video-background">
        <source src={solar} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
