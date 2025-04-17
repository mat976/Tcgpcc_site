import './App.css'
import appLogo from './assets/icon.png'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img
          src={appLogo}
          alt="TCGPCC Poket Logo"
          className="app-logo"
        />
        <h1>TCGPCC Poket</h1>
        <p className="subtitle">La solution moderne pour gérer, suivre et compléter ta collection Pokémon TCG.</p>
      </header>
      <main>
        <section className="advantages">
          <h2>Les points forts de TCGPCC Poket</h2>
          <div className="advantages-list">
            <div className="advantage">
              <span className="advantage-icon">🤖</span>
              <h3>Scan intelligent par IA</h3>
              <p>Ajoute tes cartes en un clin d'œil grâce à la reconnaissance automatique et précise de l’application.</p>
            </div>
            <div className="advantage">
              <span className="advantage-icon">📊</span>
              <h3>Suivi de complétion</h3>
              <p>Visualise instantanément le pourcentage de ta collection complétée et identifie les cartes manquantes.</p>
            </div>
            <div className="advantage">
              <span className="advantage-icon">👌</span>
              <h3>Expérience ultra-intuitive</h3>
              <p>Profite d’une interface élégante, rapide et pensée pour tous les collectionneurs, débutants ou experts.</p>
            </div>
          </div>
        </section>
        <a className="main-btn" href="#" disabled>
          Découvrir l’application
        </a>
      </main>
      <footer className="footer">
        <p> 2025 TCGPCC Poket. Site de présentation réalisé avec React & Vite.<br />Une création <strong>Matisdev</strong>.</p>
      </footer>
    </div>
  );
}

export default App
