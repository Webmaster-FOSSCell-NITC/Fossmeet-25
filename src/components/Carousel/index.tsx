"use client"

import { Children, JSX, ReactNode, useRef, useState } from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";

/**
 * creates an image carousel component with the given list of image URLs
 * 
 * @param {children} [CarouselProps.children] - Elements to be put into the carousel, only one child will be displayed at once
 * @param {children} [CarouselProps.className] - Permit override of classes in the component
 * @param {boolean} [CarouselProps.showArrows] - Shows left and right arrows for quick movement (defaults to true)
 * @param {number} [CarouselProps.maxPerPage] - Maximum number of items to be displayed per slide
 * @returns {JSX.Element} - Carousel component
 * 
 * @author Diljith P D
 */
const Carousel = ({
    children,
    className = "",
    showArrows = true,
    maxPerPage = 3,
}: CarouselProps): JSX.Element => {
    const elements = Children.toArray(children);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideCount, setSlideCount] = useState(3);
    const sliderRef = useRef<Slider>(null);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: maxPerPage,
        slidesToScroll: maxPerPage,
        initialSlide: 0,
        // afterChange: (current: number) => { console.log(current); setCurrentSlide(current) },
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: showArrows ? <PrevArrow /> : undefined,
        nextArrow: showArrows ? <NextArrow /> : undefined,
        // customPaging: (index: number) => (
        //     <div className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-secondary'}`} />
        // ),
    };

    return (
        <div className={`relative ${className}`}>
            <Slider ref={sliderRef} {...settings} className="p-2 md:p-4 lg:p-10 relative">
                {
                    elements.map((child, index) => (
                        <div key={index} className="flex items-center justify-center w-full">
                            {child}
                        </div>
                    ))
                }
            </Slider>
            {/* {
                controls && (
                    <div className='absolute -bottom-8 left-0 w-full h-8 flex items-center justify-center gap-2'>
                        {
                            Array.from({ length: elements.length }, (_, index) => (
                                <motion.button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${currentElement === index ? 'bg-primary' : 'bg-secondary'}`}
                                    onClick={() => handleControl(index)}
                                />
                            ))
                        }
                    </div>
                )
            } */}
        </div>

    )
}

export default Carousel;
export interface CarouselProps {
    children: ReactNode,
    className?: string,
    showArrows?: boolean;
    maxPerPage?: number,
}