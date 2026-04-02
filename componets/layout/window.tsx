import { IoIosClose } from "react-icons/io";
import { FiMinimize2 } from "react-icons/fi";
import { AiOutlineFullscreen } from "react-icons/ai";

interface HeaderBarProps {
  title: string;
}

interface WindowProps {
  children: React.ReactNode;
}

function HeaderBar({ title }: HeaderBarProps) {
  return (
    <div className="relative flex items-center px-4 h-9 bg-[#11111b] rounded-t-2xl overflow-hidden">
      <div className="flex gap-2 z-10">
        <div className="group flex items-center justify-center rounded-full w-3 h-3 bg-[#f38ba8] cursor-pointer hover:brightness-80 transition-all">
          <IoIosClose
            className="opacity-0 group-hover:opacity-100 text-[#11111b] transition-opacity duration-200"
            size={14}
          />
        </div>

        <div className="group flex items-center justify-center rounded-full w-3 h-3 bg-[#f9e2af] cursor-pointer hover:brightness-80 transition-all">
          <FiMinimize2
            className="opacity-0 group-hover:opacity-100 text-[#11111b] transition-opacity duration-200"
            size={10}
          />
        </div>

        <div className="group flex items-center justify-center rounded-full w-3 h-3 bg-[#a6e3a1] cursor-pointer hover:brightness-80 transition-all">
          <AiOutlineFullscreen
            className="opacity-0 group-hover:opacity-100 text-[#11111b] transition-opacity duration-200"
            size={10}
          />
        </div>
      </div>

      <h2 className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-[0.2em] pointer-events-none text-muted-foreground/70">
        {title}
      </h2>
    </div>
  );
}

function Window({ children, title }: WindowProps & HeaderBarProps) {
  return (
    <div className="glass-panel hypr-window m-5 rounded-2xl overflow-hidden border border-[#11111b]/20">
      <HeaderBar title={title} />
      <div className="p-6 text-[#cdd6f4]">{children}</div>
    </div>
  );
}

export default Window;
