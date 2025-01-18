import Container from "@/components/Container";
import Section from "@/components/Section";
import SpeakerCard from "@/components/Cards/SpeakerCard";

export default function Home() {
  return (
    <Container>
      <h1 className="text-center text-2xl font-bold mb-8">Featured Speakers</h1>
      <Section className="flex items-center justify-center">
        <SpeakerCard
          type='left'
          name="John Doe"
          talkTitle="FastAPI Workshop"
          speakerImageUrl="/sp1.png"
        />
      </Section>
    </Container>
  );
}
