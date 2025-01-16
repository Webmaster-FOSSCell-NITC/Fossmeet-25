import Container from "@/components/Container";
import Section from "@/components/Section";
import { lato } from "@/fonts";
import styles from './styles.module.css'

export default function Home() {
  return (
    <Container>
      <Section className="flex items-center justify-start h-screen w-full" id="hero">
        <div className="h-full w-full flex flex-col items-start justify-center p-24">
          <div className="flex flex-col gap-8">
            <h1 className={`${lato.className} font-medium text-8xl`}> FOSSMeet&apos;25 </h1>
            <div>
              <span className={`text-5xl font-normal leading-[64px]`}>
                Celebrating
                <span className={`text-primary ${styles.outlinedText}`}> 20 years </span>
              </span>
              <br />
              <span className="text-5xl font-normal leading-[64px]"> of FOSSMeet </span>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-24">
            <span className="text-2xl font-normal"> March 14th - 16th 2025 </span>
            <div className={`${lato.className} flex `}>
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
        <div>
          image
        </div>
      </Section>
      <Section className="flex items-center justify-center h-screen w-full" id="about-us" borderTop>
        about us
      </Section>
      <Section className="flex items-center justify-center h-screen w-full" id="workshops" borderTop>
        workshops
      </Section>
      <Section className="flex items-center justify-center h-screen w-full" id="speakers" borderTop>
        speakers
      </Section>
    </Container>
  );
}
