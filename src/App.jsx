import './App.css'
import appLogo from './assets/icon.png'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <img
          src={appLogo}
          alt="TCGP Compagnion Logo"
          className="app-logo"
        />
        <h1>TCGP Compagnion</h1>
        <p className="subtitle">Votre assistant moderne pour la gestion et la progression de votre collection Pokémon TCG.</p>
      </header>
      <main>
        <section className="advantages">
          <h2>Pourquoi choisir TCGP Compagnion&nbsp;?</h2>
          <div className="advantages-list">
            <div className="advantage">
              <span className="advantage-icon">🤖</span>
              <h3>Scan IA instantané</h3>
              <p>Ajoutez vos cartes en un flash grâce à la reconnaissance visuelle intelligente.</p>
            </div>
            <div className="advantage">
              <span className="advantage-icon">📈</span>
              <h3>Progression visuelle</h3>
              <p>Suivez votre % de complétion et repérez en un coup d’œil les cartes manquantes.</p>
            </div>
            <div className="advantage">
              <span className="advantage-icon">🎨</span>
              <h3>Expérience colorée & intuitive</h3>
              <p>Une interface dynamique et agréable, pensée pour rendre la gestion de collection fun et efficace.</p>
            </div>
          </div>
        </section>
        <a className="main-btn" href="#" disabled>
          Découvrir l’application
        </a>
      </main>
      <footer className="footer">
        <p> 2025 TCGP Compagnion. Site de présentation réalisé avec React & Vite.<br />Une création <strong>Matisdev</strong>.</p>
      </footer>
    </div>
  );
}

export default App
