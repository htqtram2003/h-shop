
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from "@/components/Navbar";
import Products from "@/components/ProductList";
import HotProducts from "@/components/hot-products";
import TwoImagesRow from "@/components/TwoImagesRow";
import Slideshow from '@/components/slideshow';
import SalePage from '@/components/SaleProductList';
import Users from '@/app/User';

export default function Home(){
  return (
    <>
    <Header />
    <Navbar />
    <Slideshow />
    <Products />
    <HotProducts />
    <TwoImagesRow />
    <SalePage />
    <Users />
    <Footer />
  </>
  );
}
