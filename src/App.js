import './App.css';
import { apps } from './data/apps';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="apps-grid">
          {apps.map((app) => (
            <div key={app.id} className="app-card-placeholder">
              <h2>{app.name}</h2>
              <p>{app.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
