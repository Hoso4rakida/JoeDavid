function Box({ children, style }: { children: React.ReactNode; style: string }) {
  return (
  <div className={`box bg-black/20 ${style}`}>
    {children}
    </div>);
}

export default Box;