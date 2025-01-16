import Container from "@/components/Container";
import Section from "@/components/Section";
import WorkshopCard from "@/components/Cards/WorkshopCard";

export default function Home() {
  return (
    <Container>
      <Section className="flex items-center justify-center">
        <WorkshopCard
          logoUrl="/fastapi.png"
          title="FastAPI Workshop"
          date="Jan 20, 2025"
          duration="2 hours"
          description="The FastAPI workshop offers an immersive dive into web API development with Python, showcasing..."
          speakerImageUrl="/fastapi.png"
          speakerName="John Doe"
          link="https://example.com"
        />
      </Section>
    </Container>
  );
}