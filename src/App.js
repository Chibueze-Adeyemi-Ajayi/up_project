import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import Wallets from './dialogs/wallet-alert';

function App() {
  return (
    <section className='w-full h-full bg-white flex flex-col space-y-2'>
      <Header/>
      <Banner/>
      <Footer/>
      <Wallets/>
    </section>
  );
}

export default App;
