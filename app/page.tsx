import About from "@/components/models/about";
import Profile from "@/components/models/profile";
import Skills from "@/components/models/skills";
import Projetos from "@/components/models/projetos";
import Social from "@/components/models/social";

export default function Home() {
  return (
    <main className="my-5">
      <About />
      <Profile />
      <Skills />
      <Projetos />
      <Social />
      <footer>
        <p className="text-center text-muted-foreground/60 text-sm mt-10 px-5">
          Feito por Joe David usando Next.js, Tailwind CSS e Vercel. Usado o design do catppuchin para deixar com a minha cara.
        </p>
        <p className="text-center text-muted-foreground/60 text-sm mb-5 px-5">
          © {new Date().getFullYear()} Joe David.
        </p>
      </footer>
    </main>
  );
}
