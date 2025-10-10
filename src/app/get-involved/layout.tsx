export default function GetInvolvedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black/20 via-gold/10 to-black/30 backdrop-blur-md text-white">
      {children}
    </div>
  );
}
