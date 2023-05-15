import { Fragment, useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";

const formatRupiah = (money) => {
  return new Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
  ).format(money);
};

const ProductItem = ({ product }) => {
  return (
    <a href={`/product/${product.id}`} className="flex flex-col items-center justify-center mb-3">
      <div className="bg-white-kj rounded-md pb-2 w-52 h-64">
        <img src={`${process.env.REACT_APP_API_URL}/${product.cover}`} alt={product.name} className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-lg text-dark-blue-kj font-norwester uppercase font-medium my-2 px-2 truncate">{product.name}</h3>
        <p className="text-gray-500 px-2">{formatRupiah(product.price)}</p>
      </div>
    </a>
  );
};

function LandingPageContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/products?limit=25&sort=price`);
      setProducts(res.data);
    };
    fetcher();
  }, []);

  return (
    <Fragment>
      <div className="text-dark-blue-kj ml-20 mt-3 text-xl py-1 pr-20 border-rose-600 text-left font-norwester inline-block border-b-4">OUR BEST PRODUCT</div>
      <div className="mx-20 mt-5 mb-10 px-10 pt-5 pb-10 bg-light-blue-kj rounded-lg">
        <Slider dots infinite speed={1000} slidesToShow={5} slidesToScroll={5} arrows>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Slider>
      </div>

    </Fragment>
  );
}

export default LandingPageContent;