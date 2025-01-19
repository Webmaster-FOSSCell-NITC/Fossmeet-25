// import Container from "@/components/Container";
// import Section from "@/components/Section";
// import WorkshopCard from "@/components/Cards/WorkshopCard";

// export default function Home() {
//   return (
//     <Container>
//       <Section className="flex flex-col items-center justify-center space-y-8">
//         <h1 className="text-2xl font-bold">FOSSMEET 25</h1>
//         <WorkshopCard
//           logoUrl="/fastapi.png"
//           title="Intro to Open Source"
//           date="Jan 20, 2025"
//           duration="2 hours"
//           description="Learn the basics of open-source contribution in this exciting workshop."
//           speakerImageUrl="/fastapi.png"
//           speakerName="John Doe"
//           link="https://example.com"
//         />
//       </Section>
//     </Container>
//   );
// }

import Container from "@/components/Container";
import Section from "@/components/Section";
import SpeakerCard from "@/components/Cards/SpeakerCard";

export default function Home() {
  return (
    <Container>
      <h1 className="text-center text-2xl font-bold mb-8">Featured Speakers</h1>
      <Section className="flex items-center justify-center">
        <SpeakerCard
          orientation="right"
          name="John Doe"
          talkTitle="FastAPI Workshop"
          speakerImageUrl="/sp.png"
        />
      </Section>
    </Container>
  );
}
