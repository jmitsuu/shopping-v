interface TypeContainer {
  children: React.ReactNode;
}
export function Container({ children }: TypeContainer) {
  return (
    <section className="min-h-screen w-full space-y-10  mx-auto container mt-20">
      {children}
    </section>
  );
}
