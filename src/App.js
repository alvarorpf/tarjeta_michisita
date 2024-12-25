import './App.css';

const Header = () => (
  <header className="header">
    <h1 className="title">🎄 Feliz Navidad, Mi Amor 🎄</h1>
    <p className="frase">Eres el mejor regalo que la vida me ha dado. Te amo con todo mi corazón.</p>
  </header>
);

function App() {
  return (
    <div className="app">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Codystar" />
      <h1 className="happy-xmas"/>
      <div id="snow"></div>
      <Header />
      <main className="main">
        <div className="card">
          <img 
            src="https://image.spreadshirtmedia.net/image-server/v1/compositions/T6A1PA5835PT17X32Y46D154806651W24688H29626/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/arbol-de-navidad-hecho-de-gatos-negros-camiseta-hombre.jpg" 
            alt="Navidad" 
            className="card-image" 
          />
          <h2 className="card-title">Para la persona más especial de mi vida</h2>
          <p className="card-description">
            Gracias por llenar mis días de amor y alegría. Esta Navidad quiero que sepas que mi corazón siempre será tuyo. ¡Eres mi sueño hecho realidad!
          </p>
          <p className="card-message">
            ❤❤❤ Te amo más de lo que las palabras pueden expresar ❤❤❤
          </p>
        </div>
      </main>
      <footer className="footer">
        <p className="frase">Diseñado con todo mi amor para ti. Atte: Michisito 🌟</p>
      </footer>
    </div>
  );
}

export default App;
