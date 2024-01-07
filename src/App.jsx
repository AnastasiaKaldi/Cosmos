import "./App.css";
import solar from "../public/solar.mp4";

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <video autoPlay loop muted className="video-background">
        <source src={solar} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>React App</p>
    </div>
  );
}

export default App;
