import { AnimatePresence, motion } from "framer-motion";
import { Children, JSX, ReactNode, useCallback, useEffect, useRef, useState } from "react";

/**
 * creates an image carousel component with the given list of image URLs
 * 
 * @param {children} [CarouselProps.children] - Elements to be put into the carousel, only one child will be displayed at once
 * @param {boolean} [CarouselProps.showArrows] - Shows left and right arrows for quick movement (defaults to true)
 * @param {boolean} [CarouselProps.controls] - Show controls for the carousel (defaults to false)
 * @param {boolean} [CarouselProps.autoPlay] - Autoplay the carousel (defaults to true)
 * @returns {JSX.Element} - Carousel component
 * 
 * @author Diljith P D
 */
const Carousel = ({
    children,
    controls = false,
    showArrows = true,
    autoPlay = true,
}: CarouselProps): JSX.Element => {
    const [currentElement, setCurrentElement] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const elements = Children.toArray(children);

    useEffect(() => {
        if (autoPlay) {
            timeoutRef.current = setInterval(() => {
                if (elements.length === 0)
                    setCurrentElement(0);
                else
                    setCurrentElement(prev => (prev + 1) % elements.length);
            }, 4000)
        }

        return () => {
            if (timeoutRef.current)
                clearInterval(timeoutRef.current);
        }
    }, [autoPlay, elements.length]);


    const handleControl = useCallback((index: number) => {
        if (timeoutRef.current)
            clearInterval(timeoutRef.current);
        if (index < 0 || index >= elements.length)
            return;
        setCurrentElement(index);
        if (autoPlay) {
            timeoutRef.current = setInterval(() => {
                if (elements.length === 0)
                    setCurrentElement(0);
                else
                    setCurrentElement(prev => (prev + 1) % elements.length);
            }, 4000)
        }
    }, [autoPlay, elements.length]);

    return (
        <div className='h-full w-full relative'>
            <div className="h-full w-full overflow-hidden relative drop-shadow-xl flex items-center justify-center">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentElement}
                        initial={{ x: '100%', position: 'absolute' }}
                        animate={{ x: '0%', position: 'relative' }}
                        exit={{ x: '-100%', position: 'absolute' }}
                        transition={{ duration: 0.8, ease: [0.445, 0.05, 0.55, 0.95] }}
                        className='object-cover w-full h-full'
                    >
                        {elements[currentElement]}
                    </motion.div>
                </AnimatePresence >
            </div>
            {
                showArrows && (
                    <div>
                        <button onClick={() => handleControl(currentElement - 1)} className="bg-secondary absolute top-[calc(50%-25px)] -left-[calc(50px+1rem)] w-[50px] h-[50px] p-[7px] flex items-center justify-center">
                            <img src="/carousel/left-arrow.svg" alt="left-arrow" height={25} width={25} />
                        </button>
                        <button onClick={() => handleControl(currentElement + 1)} className="bg-secondary absolute top-[calc(50%-25px)] -right-[calc(50px+1rem)] w-[50px] h-[50px] p-[7px] flex items-center justify-center">
                            <img src="/carousel/right-arrow.svg" alt="left-arrow" height={25} width={25} />
                        </button>
                    </div>
                )
            }
            {
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
            }
        </div>

    )
}

export default Carousel;
export interface CarouselProps {
    children: ReactNode,
    controls?: boolean;
    showArrows?: boolean;
    autoPlay?: boolean;
}