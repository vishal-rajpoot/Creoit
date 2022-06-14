import './App.css';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Products from './components/Products';
import Section from './components/Section';
import Section2 from './components/Section2';

function App() {
  return (
    <div className="App">
      <Header />
      <Container/>
      <Products/>
      <Section/>
      <Section2/>
      <Footer/>
    </div>
  );
}

export default App;
