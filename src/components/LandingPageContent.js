import { Fragment } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      price: '$10.99'
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 5,
      name: 'Product 5',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 6,
      name: 'Product 6',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 7,
      name: 'Product 7',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    // Add more products here...
  ];

  const ProductItem = ({ product }) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white-kj rounded-md pb-2">
        <img src={product.image} alt={product.name} className="w-32 h-40 object-cover rounded-md" />
        <h3 className="text-lg text-dark-blue-kj font-norwester uppercase font-medium my-2 px-2">{product.name}</h3>
        <p className="text-gray-500 px-2">{product.price}</p>
        </div>
      </div>
    );
  };

function LandingPageContent() {
    return(
        <Fragment>
            <div className="text-dark-blue-kj ml-20 mt-3 text-xl py-1 pr-20 border-rose-600 text-left font-norwester inline-block border-b-4">OUR BEST PRODUCT</div>
            <div className="mx-20 mt-5 mb-10 px-10 pt-5 pb-10 bg-light-blue-kj rounded-lg">
                <Slider dots infinite speed={1000} slidesToShow={6} slidesToScroll={1} arrows>
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </Slider>
            </div>

        </Fragment>
    );
}

export default LandingPageContent;