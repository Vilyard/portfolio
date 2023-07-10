import { About, Contact, Footer, Header, Projects } from "@/components";
import { StyledHome } from "@/styles";
export default function Home() {
  return (
    <StyledHome>
      <Header />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </StyledHome>
  );
}
