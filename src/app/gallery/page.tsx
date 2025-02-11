"use client";
import { useEffect, useRef, useState } from "react";
import { client } from "../../../sanity/lib/client";
import Navbar from "@/components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { urlForImage } from "../../../sanity/lib/image";
import Image from 'next/image';
import { lato } from "@/fonts";
import { Image as SanityImage } from "sanity";
const Media = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<{
    left: string[],
    right: string[],
    middle: string[],
  }>({
    left: [],
    right: [],
    middle: [],
  })

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const images: { image: SanityImage }[] = await client.fetch(`*[_type=="gallery_images"]`);

        const numImages = images.length;
        const leftRightImageCount = Math.floor(numImages / 3);

        setImages({
          left: images.map(image => urlForImage(image.image)),
          right: [...images.slice(leftRightImageCount).map(image => urlForImage(image.image)), 
            ...images.slice(0, leftRightImageCount).map(image => urlForImage(image.image))],
          middle: images.map(image => urlForImage(image.image))
        })

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }


    };

    fetchImages();
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-91.67%"]);
  const invertedY = useTransform(scrollYProgress, [0, 1], ['-100%', '0.1%'])
  return (
    <div className="h-[2000dvh] w-full relative" ref={containerRef}>
      <Navbar/>
      {
        loading ? 
          <div className="w-full h-screen flex gap-1 justify-center items-center">
            <h1 className="text-secondary text-2xl">Loading</h1>
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className={`w-1 h-1 bg-primary rounded-full`}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
         : 
          <div className="w-full h-screen overflow-hidden sticky top-0 grid grid-cols-1 md:grid-cols-3" style={{
            scrollBehavior: 'smooth',
          }}
          >
            <motion.div className="p-4 hidden md:flex gap-4 items-center justify-center flex-col" style={{ y: invertedY }}>
              {
                images.left.map((image, index) => (
                  <Image src={image} alt="image" className="w-full" height={1080} width={1620} key={index} />
                ))
              }
            </motion.div>
            <motion.div className="pt-16 p-4 border-x border-secondary border-x-px flex gap-4 items-center justify-center flex-col" style={{ y }}>
              <h1 className={`text-4xl ${lato.className} font-bold py-4`}> FOSSMeet&apos;24 Gallery </h1>
              {
                images.middle.map((image, index) => (
                  <Image src={image} alt="image" className="w-full" height={1080} width={1620} key={index} />
                ))
              }
            </motion.div>
            <motion.div className="p-4 hidden md:flex gap-4 items-center justify-center flex-col" style={{ y: invertedY }}>
              {
                images.right.map((image, index) => (
                  <Image src={image} alt="image" className="w-full" height={1080} width={1620} key={index} />
                ))
              }
            </motion.div>
          </div>
          
        
      }
    </div>
  );
 };

export default Media;
