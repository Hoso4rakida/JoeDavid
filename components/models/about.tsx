import Window from "@/components/layout/window";
import { LuTerminal } from "react-icons/lu";
import Bubble from "@/components/layout/bubble";

function About() {
  return (
    <Window title="~ /home/joe">
      <p className="text-primary font-mono text-sm mb-3 flex items-center gap-2"><LuTerminal className="w-4 h-4"/> QuemSouEu</p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">Joe <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Ferreira</span>.</h1>
      <p className="text-primary font-mono text-lg">
        ❯ Apaixonado por criar experiências incriveis. Rapido, eficiente e sempre buscando aprender novas tecnologias. <br />
      </p>
      <Bubble color="primary" style="mt-4 px-6 h-10">
        ./view_projects.sh
      </Bubble>
      <Bubble style="m-4 px-6 h-10">
        contato
      </Bubble>
    </Window>
  );
}

export default About;
