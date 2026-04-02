import About from "@/componets/models/about";
import Profile from "@/componets/models/profile";
import Skills from "@/componets/models/skills";
import Projetos from "@/componets/models/projetos";

export default function Home() {
  return (
    <main>
      <About />
      <Profile />
      <Skills />
      <Projetos />
    </main>
  );
}
