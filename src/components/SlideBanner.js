import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner.jpg";
import banner2 from "../assets/auto_level.png";
import banner3 from "../assets/theodolite.png";
import banner4 from "../assets/total_station.png";

function SlideBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [banner1, banner2, banner3, banner4];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slides.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [currentSlide, slides.length]);

    return (
        <div className="w-100 relative py-5 mx-20">
            <img src={slides[currentSlide]} alt="slide" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
            </div>
        </div>
    );
}

export default SlideBanner;
