interface BubbleProps {
  color?: "primary" | "secondary" | "accent" | "destructive" | "muted";
  children: React.ReactNode;
  style?: string;
}

function Bubble({ color, children, style }: BubbleProps) {
  
  const colorVariants = {
    primary: "bg-primary/10 border-primary/30 text-primary shadow-[0_0_15px_rgba(203,166,247,0.1)] hover:bg-primary/50", // Mauve
    secondary: "bg-secondary/10 border-secondary/30 text-secondary hover:bg-secondary/50", // Teal
    accent: "bg-accent/10 border-accent/30 text-accent hover:bg-accent/50", // Maroon/Pink
    destructive: "bg-destructive/10 border-destructive/30 text-destructive hover:bg-destructive/50", // Red
    muted: "bg-muted/30 border-border text-muted-foreground hover:bg-muted/80", // Surface/Gray
  };

  const variant = color ? colorVariants[color] : colorVariants.muted;

  return (
    <div className={`
      inline-flex items-center justify-center
      px-3 py-1 
      rounded-md border 
      text-xs font-mono tracking-tighter
      transition-all duration-300
      ${variant} ${style}
    `}>
      {children}
    </div>
  );
}

export default Bubble;