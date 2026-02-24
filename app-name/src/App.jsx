import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  const [links, setLinks] = useState(['Home', 'About', 'Contact']);

  return (
    <div className="app">
      <Header links={links} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;