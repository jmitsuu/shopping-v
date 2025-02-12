import { Skeleton } from '@/components/ui/skeleton';
type TdivQt = {
  qtDivs: number;
};
export function SkeletonCard({ qtDivs }: TdivQt) {
  const dataDivNumbers = Array.from(
    { length: qtDivs + 1 },
    (_, index) => index
  );
  return (
    <section className="flex flex-wrap justify-center gap-x-5">
      {dataDivNumbers.map((index) => {
        return (
          <div
            key={index}
            className="relative flex items-center justify-center"
          >
            <h1 className="absolute text-slate-500">Carregando..</h1>
            <Skeleton key={index} className="h-80 w-52 rounded-md my-20 " />
          </div>
        );
      })}
    </section>
  );
}
