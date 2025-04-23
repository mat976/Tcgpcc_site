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
      </header>
      <main>
        <section className="hero">
          <h1>Bienvenue sur l’application TCGPCC !</h1>
          <p className="hero-text">TCGPCC est une application mobile conçue pour scanner et analyser des cartes Pokémon du jeu Pokémon Trading Card Game (TCG). Elle permet aux utilisateurs de gérer leurs cartes, d'obtenir des informations précieuses sur la valeur et de suivre leur collection avec facilité.</p>
        </section>
        <section className="advantages">
          <h2>Fonctionnalités principales</h2>
          <div className="advantages-list">
            <div className="advantage">
              <span className="advantage-icon">🔍</span>
              <h3>Scannage rapide et précis</h3>
              <p>Analyse instantanée de vos cartes TCG grâce à la reconnaissance visuelle intelligente.</p>
            </div>
            <div className="advantage">
              <span className="advantage-icon">📚</span>
              <h3>Gestion facile de la collection</h3>
              <p>Organisez et suivez vos cartes en toute simplicité.</p>
            </div>
            <div className="advantage">
              <span className="advantage-icon">🎁</span>
              <h3>Publicités récompensées</h3>
              <p>Boostez vos analyses en regardant une publicité non intrusive.</p>
            </div>
            <div className="advantage">
              <span className="advantage-icon">⚙️</span>
              <h3>Fonctionnalités avancées</h3>
              <p>Accès à des outils exclusifs pour les utilisateurs réguliers.</p>
            </div>
          </div>
        </section>
        <section className="download">
          <h2>Télécharger l’application</h2>
          <a className="download-btn" href="#" target="_blank" rel="noopener noreferrer">Disponible sur Google Play Store</a>
        </section>
        <section className="app-ads-link">
          <p>App-Ads.txt : Notre fichier app-ads.txt est accessible en toute transparence pour les annonceurs. Vous pouvez consulter notre fichier <a href="/app-ads.txt" target="_blank">ici</a>.</p>
        </section>
      </main>
      <footer className="footer">
        <p> 2025 TCGP Compagnion. Site de présentation réalisé avec React & Vite.<br />Une création <strong>Matisdev</strong>.</p>
      </footer>
    </div>
  );
}

export default App
