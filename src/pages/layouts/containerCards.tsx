interface TypeContainerCards {
  children: React.ReactNode;
  styleDiv?: string;
}
export function ContainerCards({ children, styleDiv }: TypeContainerCards) {
  return (
    <div className="w-full flex  justify-center items-center">
      <div
        className={` ${styleDiv} gap-x-5 lg:grid-cols-4 gap-y-4  xl:grid-cols-5 md:grid-cols-3 mb-20`}
      >
        {children}
      </div>
    </div>
  );
}
