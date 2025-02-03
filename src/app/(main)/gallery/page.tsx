'use client';
import { useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";
import Container from "@/components/Container";
import Section from "@/components/Section";
import styles from '../styles.module.css'
import { lato } from "@/fonts";
import { Image } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";

const Media = () => {
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState<{
    image: Image,
  }[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const images = await client.fetch(`*[_type=="gallery_images"]`);
        setGalleryImages(images);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <Container>
        <Section className="w-full h-full min-h-screen pb-20 pt-48  ">
            {/* <h1 className={`${lato.className} text-4xl lg:text-8xl text-bold`}>
                FOSSMeet&apos;24 Gallery
            </h1> */}

            <h1 className={`${styles.outlinedText} text-primary text-5xl sm:text-6xl lg:text-8xl`}> FOSSMeet&apos;24 Gallery </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-20">
                {
                    galleryImages.map((img, index) => (
                        <img key={index} src={urlForImage(img.image)} alt="gallery-image" className="w-full h-full  hover:scale-[1.01] transition-transform duration-200" />
                    ))
                }
            </div>
        </Section>
    </Container>
  );
};

export default Media;