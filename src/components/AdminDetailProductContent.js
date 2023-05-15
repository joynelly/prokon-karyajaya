import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AdminDetailProductContent() {
    const [product, setProduct] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const { id } = useParams();
    const slides = [];

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`);
            setProduct(res.data);
        };
        fetch();
    }, [id]);

    slides.push(`${process.env.REACT_APP_API_URL}/${product.cover}`);
    product?.product_images?.map((img) => {
        slides.push(`${process.env.REACT_APP_API_URL}/${img.image_url}`);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slides.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [currentSlide, slides.length]);

    function dataDescription() {
        return { __html: product.description };
    };

    const formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID',
            { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(money);
    };

    return (
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-pink-kj">
                <div className="grid grid-cols-6 gap-3">
                    <div className="col-span-2 row-span-1 h-min rounded-xl bg-grey-kj">
                        <div className="w-100 relative p-2">
                            <img src={slides[currentSlide]} alt="slide" className="w-full h-full object-cover rounded-lg" />
                            <div className="absolute inset-0 flex items-center justify-center"></div>
                        </div>
                    </div>
                    <div className="col-span-4 row-span-2 rounded-xl bg-grey-kj font-serif text-base leading-8">
                        <div className="grid grid-cols-1 gap-2 p-2">
                            <div className="col-span-1 row-span-1 rounded-xl bg-white p-2 font-serif text-3xl leading-8 text-left">
                                {product.name}
                            </div>
                            <div className="col-span-1 row-span-1 rounded-xl bg-white p-2 font-serif text-xl leading-8 text-left">
                                <p>Brand: {product?.brand?.name}</p>
                                <p>Category: {product?.category?.name}</p>
                            </div>
                            <div className="col-span-1 row-span-1 rounded-xl h-max bg-white">
                                <div className="grid grid-rows-6 gap-2 p-2">
                                    <div className="col-span-1 row-span-6 rounded-xl bg-grey-kj p-4 font-serif text-xl leading-8" dangerouslySetInnerHTML={dataDescription()} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 rounded-xl bg-grey-kj">
                        <div className="grid grid-cols-4 gap-2 p-2">
                            <div className="col-span-4 row-span-1 rounded-xl bg-white p-2 font-serif text-3xl leading-8 text-center">
                                {formatRupiah(product.price)}
                            </div>
                            <div className="col-span-4 row-span-1 rounded-xl bg-white p-2 font-serif text-3xl leading-8 text-center">
                                Stock: {product.stock}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AdminDetailProductContent;