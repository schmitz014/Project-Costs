import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import NovoProjeto from './components/pages/novoProjeto';
import Contato from './components/pages/Contato';
import Projetos from './components/pages/Projetos';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Router> {/* Componente Router envolve todos os elementos */}
        <Navbar></Navbar>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projetos" element={<Projetos />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/NovoProjeto" element={<NovoProjeto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Container>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
