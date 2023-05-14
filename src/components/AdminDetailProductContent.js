import React, { Fragment, useState, useEffect } from "react";

function AdminDetailProductContent(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = ['https://via.placeholder.com/300', 
                    'https://via.placeholder.com/300', 
                    'https://via.placeholder.com/300', 
                    'https://via.placeholder.com/300',
                    'https://via.placeholder.com/300'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slides.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [currentSlide, slides.length]);

    return(
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-pink-kj">
                <div className="grid grid-cols-6 gap-3">
                    <div className="col-span-2 row-span-1 rounded-xl bg-grey-kj">
                        <div className="w-100 relative p-2">
                            <img src={slides[currentSlide]} alt="slide" className="w-full h-full object-cover rounded-lg" />
                            <div className="absolute inset-0 flex items-center justify-center"></div>
                        </div>
                    </div>
                    <div className="col-span-4 row-span-2 rounded-xl bg-grey-kj font-serif text-base leading-8">
                        <div className="grid grid-cols-1 gap-2 p-2">
                            <div className="col-span-1 row-span-1 rounded-xl bg-white p-2 font-serif text-xl leading-8 text-left">
                                PRODUCT CATEGORY
                            </div>
                            <div className="col-span-1 row-span-1 rounded-xl bg-white p-2 font-serif text-xl leading-8 text-left">
                                PRODUCT BRAND
                            </div>
                            <div className="col-span-1 row-span-1 rounded-xl bg-white">
                                <div className="grid grid-rows-6 gap-2 p-2">
                                    <div className="col-span-1 row-span-1 rounded-xl bg-grey-kj p-2 font-serif text-xl leading-8 text-center">
                                        PRODUCT NAME
                                    </div>
                                    <div className="col-span-1 row-span-6 rounded-xl bg-grey-kj p-2 font-serif text-xl text-center">
                                        PRODUCT DESC
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 rounded-xl bg-grey-kj">
                        <div className="grid grid-cols-4 gap-2 p-2">
                            <div className="col-span-4 row-span-1 rounded-xl bg-white p-2 font-serif text-xl leading-8 text-center">
                                PRODUCT PRICE
                            </div>
                            <div className="col-span-4 row-span-1 rounded-xl bg-white p-2 font-serif text-xl leading-8 text-center">
                                STOCK
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminDetailProductContent;