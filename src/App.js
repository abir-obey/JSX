import butterfly from "./assets/imageInSrc.jpg";
import effect from "./assets/the.mp4";
import "./App.css";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">I am a Butterfly</h1>
        <br />
        <img src={butterfly} alt="butterfly" />
        <br />
        <img src="/imageInPublic.jpg" alt="butterfly" />
      </div>
      <h2>Video</h2>
      <video style={{ width: "320", height: "240" }} controls>
        <source src={effect} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
