import { TbBrandGithub } from "react-icons/tb";
import { LuExternalLink } from "react-icons/lu";
import Box from "@/componets/layout/box";
import Bubble from "@/componets/layout/bubble";

interface ProjetoProps {
  nome: string;
  descricao: string;
  tecnologias: string[];
  github: string;
  link: string;
}

function Projeto({ nome, descricao, tecnologias, github, link }: ProjetoProps) {
  return (
    <Box style="p-5 rounded-lg hover:bg-secondary/10 transition-colors border-1 border-secondary/0 hover:border-secondary/30 hover:text-secondary">
      <div className="flex justify-between items-center mb-5">
        <h4 className="text-2xl font-bold">{nome}</h4>
        <div className="flex gap-2 text-muted-foreground/80">
          <a href={github} target="_blank" rel="Repositorio" className="hover:text-white">
            <TbBrandGithub size={24} />
          </a>
          <a href={link} target="_blank" rel="Site" className="hover:text-white">
            <LuExternalLink size={20} />
          </a>
        </div>
      </div>
      <p className="text-muted-foreground/80 ">{descricao}</p>
      {tecnologias.map((tech, index) => (
        <Bubble key={index} style="px-2 py-1 mr-2 mt-3">{tech}</Bubble>
      ))}
    </Box>
  );
}

export default Projeto;
