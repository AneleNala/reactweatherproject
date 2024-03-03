import "./weather.css"
import Weather from "./Weather";

function App() {
  return (
    <div className="App">

      <Weather city="Johannesburg"/>
    <footer className="text-center">
            This is coded by <a href="https://github.com/AneleNala" target="_blank" rel="noreferrer">Anele Nala </a> and <a href="https://github.com/AneleNala/reactweatherproject" target="_blank" rel="noreferrer">open-sourced on GitHub</a> and hosted on <a href="https://reactprojectweatherapp.netlify.app/" targert="_blank" rel="noreferrer">Netlify</a>.
        </footer>
    </div>
  );
}

export default App;
