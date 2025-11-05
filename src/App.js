import './App.css';
import { apps } from './data/apps';
import Header from './components/Header/Header';
import AppCard from './components/AppCard/AppCard';

function App() {
  return (
    <div className="App">
      <Header 
        title="App Showcase" 
        subtitle="Discover our amazing mobile applications"
      />
      <main className="container">
        <div className="apps-grid" role="list" aria-label="Mobile applications showcase">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
