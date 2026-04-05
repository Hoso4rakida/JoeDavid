import Window from "@/components/layout/window";
import { IoCodeSlashSharp } from "react-icons/io5";
import Bubble from "@/components/layout/bubble";

interface SkillsProps {
  style?: string;
}

const skillsData = {
  languages: ["TypeScript", "Python", "SQL", "Lua", "JavaScript"],
  frameworks: ["React", "Next.js", "Tailwind CSS", "FastAPI"],
  tools: ["Linux (CachyOS)", "Docker", "Git", "Neovim"],
};

type BubbleColor = "primary" | "secondary" | "accent" | "muted" | "destructive";

function RenderSkillsList({
  title,
  skills,
  color,
}: {
  title: string;
  skills: string[];
  color: BubbleColor;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-3">
        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
          {title}
        </h4>
        <div className="h-[1px] w-full bg-border/50 mt-1" />
      </div>

      <ul className="flex flex-wrap gap-2 content-start">
        {skills.map((skill, index) => (
          <li key={index} className="list-none">
            <Bubble color={color} style="h-8">
              {skill}
            </Bubble>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills({ style }: SkillsProps) {
  return (
    <Window title="skills.json" style={style}>
      <div className="p-2">
        <div className="flex items-center gap-2 mb-8">
          <IoCodeSlashSharp size={20} className="text-primary" />
          <h2 className="font-mono font-bold text-lg tracking-tighter">
            ./arsenal_tecnico
          </h2>
        </div>

        {/* Grid de 3 colunas que vira 1 no mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <RenderSkillsList
            title="Linguagens"
            skills={skillsData.languages}
            color="primary" // Mauve (Roxo)
          />
          <RenderSkillsList
            title="Frameworks"
            skills={skillsData.frameworks}
            color="secondary" // Teal
          />
          <RenderSkillsList
            title="Ferramentas"
            skills={skillsData.tools}
            color="accent" // Maroon/Pink
          />
        </div>
      </div>
    </Window>
  );
}

export default Skills;
