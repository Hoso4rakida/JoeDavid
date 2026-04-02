import Window from "@/componets/layout/window";
import Projeto from "@/componets/layout/projeto";

import { BsWindowSplit } from "react-icons/bs";


const projeto1 = {
  nome: "Chris Arquitetura",
  descricao: "Site feito para servir de porfolio para uma aquiteta, aonde ela pode mostrar seus projetos e serviços, além de ter um blog para falar sobre arquitetura e design.",
  tecnologias: ["React", "TypeScript", "Vite", 'Vercel'],
  github: "https://github.com/Hoso4rakida/Christiane-Arquiteturas",
  link: "https://site-mainha.vercel.app/"
};

const projeto2 = {
  nome: "Meu Portfólio",
  descricao: "Meu portfólio pessoal, onde mostro meus projetos, habilidades e experiências. O site é responsivo e tem um design moderno e clean.",
  tecnologias: ["Next.js", "Tailwind CSS", "Vercel"],
  github: "https://github.com/seu-usuario/projeto-2",
  link: "https://seu-usuario.github.io/projeto-2"
};


function Projetos() {
  return (
    <Window title="~/workspace/projetos">
      <div className="p-2">
        <div className="flex items-center gap-2 mb-8">
          <BsWindowSplit size={20} className="text-secondary" />
          <h2 className="font-bold text-xl tracking-wider">
            Projetos Feitos
          </h2>
        </div>

        {/* Grid de 2 colunas que vira 1 no mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Projeto nome={projeto1.nome} descricao={projeto1.descricao} tecnologias={projeto1.tecnologias} github={projeto1.github} link={projeto1.link} />
          <Projeto nome={projeto2.nome} descricao={projeto2.descricao} tecnologias={projeto2.tecnologias} github={projeto2.github} link={projeto2.link} />
        </div>
      </div>
    </Window>
  );
}

export default Projetos;
