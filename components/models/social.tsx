import Window from "@/components/layout/window";
import { LuCoffee, LuLinkedin } from "react-icons/lu";
import { TbBrandGithub } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import Bubble from "@/components/layout/bubble";

interface SocialProps {
  style?: string;
  id?: string;
}

function Social({ style, id }: SocialProps) {
  return (
    <Window title="contact.sh" style={style} id={id}>
      <div className="flex items-center pb-5">
        <LuCoffee size={24} className="text-destructive" />
        <h4 className="text-xl font-bold pl-3">Minhas Redes Sociais</h4>
        </div>
        <p className="text-muted-foreground/80 text-sm ">Se tem alguma duvida, uma ideia de projeto, ou apenas quer conversar para discutir dicas, minhas redes sociais esta sempre aberto.</p>
      
      <div className="flex gap-4 mt-4">
        <a href="https://github.com/Hoso4rakida" target="_blank" rel="noopener noreferrer">
          <Bubble style="px-6 py-2 font-bold">
            <TbBrandGithub size={20} className="text-muted-foreground/80 mr-1" />
            <p className="text-muted-foreground/80">Github</p>
          </Bubble>
        </a>
        <a href="mailto:joedavid2003@proton.me" target="_blank" rel="noopener noreferrer">
          <Bubble style="px-6 py-2 font-bold">
            <MdOutlineMail size={20} className="text-muted-foreground/80 mr-1" />
            <p className="text-muted-foreground/80 mt-1">Email</p>
          </Bubble>
        </a>
        <a href="https://www.linkedin.com/in/joe-david-ferreira-296854220/" target="_blank" rel="noopener noreferrer">
          <Bubble style="px-6 py-2 font-bold">
            <LuLinkedin size={20} className="text-muted-foreground/80 mr-1" />
            <p className="text-muted-foreground/80 mt-1">Linkedin</p>
          </Bubble>
        </a>
      </div>
    </Window>
  );
}

export default Social;
