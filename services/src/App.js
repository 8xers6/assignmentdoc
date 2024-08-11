import './App.css'; // Ensure this includes your Tailwind CSS setup if you're using it
import Navbar from './assets/navbar';
import Marketingplan from './assets/Marketingplan';
import CarouselWithText from './assets/body';
import SellingProcess from './assets/sellingprocess';
import Buyingprocess from './assets/buyingprocess';
import Sucess from './assets/sucess';
import Markethome from './assets/markethome';
import Affiate from './assets/affliate';
import Contactus from './assets/contactus';
import Beforefooter from './assets/beforefooter';
import Footer from './assets/Footer';
import ScrollToTopButton from './assets/scrollup';

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <Marketingplan />
        <CarouselWithText />
        <SellingProcess />
        <Buyingprocess />
        <Sucess />
        <Markethome />
        <Affiate />
        <Contactus />
        <Beforefooter />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
