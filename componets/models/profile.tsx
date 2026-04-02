import Window from "@/componets/layout/window";

function Profile() {
  return (
    <Window title="neofetch">
      <div className="flex flex-col items-center">
        <div className="w-full text-center mb-4">
          <div className="relative overflow-hidden w-48 h-48 rounded-2xl mb-4 border-8 border-foreground/15 block mx-auto transform-content rotate-358 hover:rotate-360 transition-transform duration-300">
            <style>{`
                        @keyframes scanline-move {
                        0% { transform: translateY(-150%); }
                        100% { transform: translateY(350%); }
                        }
                        .force-animate {
                        animation: scanline-move 3s linear infinite !important;
                        }
                    `}</style>

            <img
              src="https://i.pinimg.com/736x/81/07/6d/81076ddc4cb6737d4163b7a301906fe6.jpg"
              alt="Profile Image"
              className="w-full h-full rounded-lg object-cover"
            />

            <div
              className="absolute top-0 left-0 w-full h-16 blur-2xl force-animate pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, #cba6f7, transparent)",
                opacity: 0.5,
              }}
            />
          </div>

          <h3 className="font-bold text-xl">joedavid@lata</h3>
          <p className="text-muted-foreground opacity-50 pb-5">
            ------------------
          </p>
          <hr />
        </div>

        <div className="space-y-1 w-full pt-5">
          <div className="flex gap-4 font-mono text-sm">
            <span className="w-16 font-bold text-secondary">OS</span>
            <span className="text-muted-foreground tracking-wide">CachyOS</span>
          </div>
          <div className="flex gap-4 font-mono text-sm">
            <span className="w-16 font-bold text-accent">WM</span>
            <span className="text-muted-foreground tracking-wide">Hyprland</span>
          </div>
          <div className="flex gap-4 font-mono text-sm">
            <span className="w-16 font-bold text-primary">Term</span>
            <span className="text-muted-foreground tracking-wide">Kitty</span>
          </div>
          <div className="flex gap-4 font-mono text-sm">
            <span className="w-16 font-bold text-destructive">Editor</span>
            <span className="text-muted-foreground tracking-wide">VS Code</span>
          </div>
        </div>

        <div className="w-full border-t border-border/50 my-4" />

        <p className="text-muted-foreground leading-relaxed text-center sm:text-left">
          Analista de dados e desenvolvedor de Sistemas focado em arquiteturas
          de alta performance. Unindo a robustez da análise de dados à criação
          de interfaces táteis e responsivas. Aplico a eficiência da filosofia
          Unix para construir soluções web fluidas, escaláveis e tecnicamente
          otimizadas.
        </p>
      </div>
        <p className="text-muted-foreground italic text-center">
          "Do one thing and do it well" - The Unix Philosophy
        </p>
    </Window>
  );
}

export default Profile;
