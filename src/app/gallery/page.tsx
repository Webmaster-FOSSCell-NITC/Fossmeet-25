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
          left: images.map(image => urlForImage(image.image)).slice(0, leftRightImageCount),
          right: images.map(image => urlForImage(image.image)).slice(leftRightImageCount, 2 * leftRightImageCount),
          middle: images.map(image => urlForImage(image.image)).slice(2 * leftRightImageCount),
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const invertedY = useTransform(scrollYProgress, [0, 1], ['-80%', '20%'])

  return (
    <div className="h-[2000dvh] w-full relative" ref={containerRef}>
      <Navbar />
      <div className="w-full h-screen overflow-hidden sticky top-0 grid grid-cols-3" style={{
        scrollBehavior: 'smooth',
      }}
      >
        <motion.div className="p-4 flex gap-4 items-center justify-center flex-col" style={{ y: invertedY }}>
          {
            images.left.map((image, index) => (
              <Image src={image} alt="image" className="w-full" height={200} width={200} key={index} />
            ))
          }
        </motion.div>
        <motion.div className="pt-16 p-4 border-x border-secondary border-x-px flex gap-4 items-center justify-center flex-col" style={{ y }}>
          <h1 className={`text-4xl ${lato.className} font-bold py-4`}> FOSSMeet&apos;24 Gallery </h1>
          {
            images.middle.map((image, index) => (
              <Image src={image} alt="image" className="w-full" height={200} width={200} key={index} />
            ))
          }
        </motion.div>
        <motion.div className="p-4 flex gap-4 items-center justify-center flex-col" style={{ y: invertedY }}>
          {
            images.right.map((image, index) => (
              <Image src={image} alt="image" className="w-full" height={200} width={200} key={index} />
            ))
          }
        </motion.div>
      </div>
    </div>
  );
};

export default Media;
