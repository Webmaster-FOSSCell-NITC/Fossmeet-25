import Container from "@/components/Container";
import Section from "@/components/Section";
import { lato } from "@/fonts";
import styles from './styles.module.css'
import Marquee from "@/components/Marquee";
import Image from 'next/image'
import WorkshopCard, { WorkshopCardProps } from "@/components/Cards/WorkshopCard";
import Carousel from "@/components/Carousel";
import SpeakerCard, { SpeakerCardProps } from "@/components/Cards/SpeakerCard";

const dummyWorkshopData: WorkshopCardProps[] = [
  {
    logoUrl: "/card/fastapi.png",
    title: "Fast Api",
    date: "24th March, 2025",
    duration: "5 hours",
    description: "Fast api workshop onli",
    speakerName: "Mayank Gupta",
    speakerImageUrl: "/card/sp.png",
    link: "https://www.google.com",
  },
  {
    logoUrl: "/card/fastapi.png",
    title: "Fast Api",
    date: "24th March, 2025",
    duration: "5 hours",
    description: "Fast api workshop onli",
    speakerName: "Mayank Gupta",
    speakerImageUrl: "/card/sp.png",
    link: "https://www.google.com",
  },
  {
    logoUrl: "/card/fastapi.png",
    title: "Fast Api",
    date: "24th March, 2025",
    duration: "5 hours",
    description: "Fast api workshop onli",
    speakerName: "Mayank Gupta",
    speakerImageUrl: "/card/sp.png",
    link: "https://www.google.com",
  },
  {
    logoUrl: "/card/fastapi.png",
    title: "Fast Api",
    date: "24th March, 2025",
    duration: "5 hours",
    description: "Fast api workshop onli",
    speakerName: "Mayank Gupta",
    speakerImageUrl: "/card/sp.png",
    link: "https://www.google.com",
  },
  {
    logoUrl: "/card/fastapi.png",
    title: "Fast Api",
    date: "24th March, 2025",
    duration: "5 hours",
    description: "Fast api workshop onli",
    speakerName: "Mayank Gupta",
    speakerImageUrl: "/card/sp.png",
    link: "https://www.google.com",
  },
  {
    logoUrl: "/card/fastapi.png",
    title: "Fast Api",
    date: "24th March, 2025",
    duration: "5 hours",
    description: "Fast api workshop onli",
    speakerName: "Mayank Gupta",
    speakerImageUrl: "/card/sp.png",
    link: "https://www.google.com",
  },
  {
    logoUrl: "/card/fastapi.png",
    title: "Fast Api",
    date: "24th March, 2025",
    duration: "5 hours",
    description: "Fast api workshop onli",
    speakerName: "Mayank Gupta",
    speakerImageUrl: "/card/sp.png",
    link: "https://www.google.com",
  },
  {
    logoUrl: "/card/fastapi.png",
    title: "Fast Api",
    date: "24th March, 2025",
    duration: "5 hours",
    description: "Fast api workshop onli",
    speakerName: "Mayank Gupta",
    speakerImageUrl: "/card/sp.png",
    link: "https://www.google.com",
  },
];

const dummySpeakerData: SpeakerCardProps[] = [
  {
    orientation: "left",
    name: "Mayank Gupta",
    talkTitle: "why CSEA sucks",
    speakerImageUrl: "/card/sp.png",
  },
  {
    orientation: "right",
    name: "Not Mayank Gupta",
    talkTitle: "Why CSEA doesn't suck",
    speakerImageUrl: "/card/sp1.png",
  },
  {
    orientation: "left",
    name: "Mayank Gupta",
    talkTitle: "why CSEA sucks",
    speakerImageUrl: "/card/sp.png",
  },
  {
    orientation: "right",
    name: "Not Mayank Gupta",
    talkTitle: "Why CSEA doesn't suck",
    speakerImageUrl: "/card/sp1.png",
  }, {
    orientation: "left",
    name: "Mayank Gupta",
    talkTitle: "why CSEA sucks",
    speakerImageUrl: "/card/sp.png",
  },
  {
    orientation: "right",
    name: "Not Mayank Gupta",
    talkTitle: "Why CSEA doesn't suck",
    speakerImageUrl: "/card/sp1.png",
  }, {
    orientation: "left",
    name: "Mayank Gupta",
    talkTitle: "why CSEA sucks",
    speakerImageUrl: "/card/sp.png",
  },
  {
    orientation: "right",
    name: "Not Mayank Gupta",
    talkTitle: "Why CSEA doesn't suck",
    speakerImageUrl: "/card/sp1.png",
  },
];

export default function Home() {
  return (
    <Container>
      <Section className="flex items-center justify-start h-screen w-screen relative" id="hero">
        <div className="h-full w-full flex flex-col items-start justify-center py-24">
          <div className="flex flex-col gap-8">
            <h1 className={`${lato.className} font-medium text-center lg:text-left text-5xl lg:text-8xl`}> FOSSMeet&apos;25 </h1>
            <div>
              <span className={`text-2xl lg:text-5xl font-normal leading-[64px]`}>
                Celebrating
                <span className={`text-primary ${styles.outlinedText}`}> 20 years </span>
              </span>
              <br />
              <span className="text-2xl lg:text-5xl font-normal leading-[64px]"> of FOSSMeet </span>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-14 lg:mt-24">
            <span className="text-base lg:text-2xl font-normal"> March 14th - 16th 2025 </span>
            <div className={`${lato.className} flex flex-col lg:flex-row`}>
              <div className="flex items-center justify-center bg-primary px-[4px] py-[7px] pe-[24px]">
                <img src="/landing-page/map-marker.svg" alt="location" height={25} width={25} />
                <span> NIT CALICUT </span>
              </div>
              <a href="#" className="flex items-center justify-center bg-secondary text-white px-[4px] py-[7px] ps-[24px]">
                <span> Register </span>
                <img src="/icons/arrow.svg" alt="arrow" height={25} width={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 -right-4 md:-right-16 h-fit w-fit">
          <Image
            src="/landing-page/hero-imagae.png"
            alt="landing-page-image"
            width={1024}
            height={1024}
          />
        </div>
      </Section>
      <Marquee />
      <Section className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-[75dvh] h-full w-full" id="about-us" borderTop>
        <div className="w-full lg:w-1/3 border border-0 lg:border-e-[1px] border-e-secondary/25 min-h-[75dvh] h-full relative">
          <button>
            <span className="text-base font-normal p-2 w-[25px] h-[25px] absolute top-10 left-10 rounded-full border border-px border-secondary/25 flex items-center justify-center"> i </span>
          </button>
          <img src="/landing-page/about-us-image.png" alt="about-us-image" className="w-full h-full object-fit-cover" />
        </div>
        <div className="w-full lg:w-2/3 ps-0 lg:ps-[64px] py-[87px] flex flex-col items-start justify-between min-h-[75dvh] h-full">
          <div className="flex flex-col gap-4">
            <span className={`${lato.className} font-normal text-2xl lg:text-5xl`}> About </span>
            <span className={`${styles.outlinedText} text-primary text-2xl lg:text-5xl`}> FOSSMeet </span>
          </div>

          <p className="text-sm lg:text-2xl font-normal w-full lg:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac aliquam orci. Integer hendrerit volutpat mauris sit amet fringilla. Nullam ullamcorper lorem sed consectetur sollicitudin. Vestibulum pretium mi non dui venenatis maximus.
          </p>

          <div className="text-sm lg:text-2xl font-normal flex flex-col gap-4">
            <span> Check out our past meet </span>
            <button className="bg-primary py-[7px] px-[7px]"> FOSSMeet &apos;24 </button>
          </div>
        </div>
      </Section>
      <Section className="flex flex-col items-center justify-start h-full lg:h-screen w-full p-0 py-4 lg:py-14" id="workshops" borderTop>
        <div className="flex justify-between gap-4 w-full items-center">
          <div className="flex flex-col gap-0 lg:gap-4 w-full">
            <span className={`${lato.className} font-normal text-2xl lg:text-5xl`}> Engaging </span>
            <span className={`${styles.outlinedText} text-primary text-2xl lg:text-5xl`}> Workshops </span>
          </div>

          <button className="bg-primary py-[7px] px-[7px] text-nowrap"> View all Workshops &nbsp; &rarr; </button>

        </div>

        <div className="mt-10 lg:mt-0 w-full h-full flex items-center justify-center">
          <Carousel className="w-full h-full" maxPerPage={3}>
            {
              dummyWorkshopData.map((data, index) => (
                <div key={index} className="flex items-center justify-center">
                  <WorkshopCard {...data} />
                </div>
              ))
            }
          </Carousel>

        </div>
      </Section>
      <Section className="flex flex-col-reverse lg:flex-row items-center justify-start h-full lg:h-screen w-full py-14" id="speakers" borderTop>
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
          <Carousel className="w-full h-full" maxPerPage={2}>
            {
              dummySpeakerData.map((data, index) => (
                <div key={index} className="flex items-center justify-center">
                  <SpeakerCard {...data} />
                </div>
              ))
            }
          </Carousel>
        </div>
        <div className="w-full lg:w-1/2 h-full flex lg:ps-14 flex-col items-start gap-4">
          <span className={`${lato.className} font-normal text-2xl lg:text-5xl`}> Meet our  </span>
          <span className={`${styles.outlinedText} text-primary text-2xl lg:text-5xl`}> Speakers </span>

          <p className="text-base lg:text-xl font-normal leading-[44px] w-full lg:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac aliquam orci. Integer hendrerit volutpat mauris sit amet fringilla. Nullam ullamcorper lorem sed consectetur sollicitudin.
          </p>

          <button className="bg-primary py-[7px] px-[7px]"> View All Speakers &nbsp; &rarr; </button>

        </div>

      </Section>
    </Container>
  );
}
