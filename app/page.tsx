import Nav from "@/components/Nav";
import {
  Hero,
  About,
  Work,
  Experience,
  Stack,
  
  Contact,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Stack />
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}
