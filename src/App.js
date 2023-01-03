import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';

function App() {
  return (
    <section className='w-full h-full bg-white flex flex-col space-y-2'>
      <Header/>
      <Banner/>
      <Footer/>
    </section>
  );
}

export default App;
