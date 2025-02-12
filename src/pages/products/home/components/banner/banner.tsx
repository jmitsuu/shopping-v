import { Button } from '@/components/ui/button';
import girlBanner from '@/assets/images/banner/girl-banner.png';
export function Banner() {
  return (
    <section className="w-full mnin-h-96  flex md:flex-row flex-col items-center justify-between my-20 py-20 px-20 bg-rose-50/40">
      <div className="md:space-y-2 space-y-5 flex flex-col md:mb-0 mb-5 md:items-start items-center">
        <h1 className="md:text-5xl text-3xl text-orange-500 font-bold">
          desconto de 30%
        </h1>
        <h1 className="lg:text-6xl md:text-5xl text-2xl">Coleção de verão</h1>
        <h2 className="text-slate-500 md:text-2xl text-xl">
          Aproveite a promoção do verão com descontos de 30%
        </h2>
        <Button variant="default" className="md:mt-10">
          Ver Oferta
        </Button>
      </div>
      <div>
        <img src={girlBanner} alt="girl-banner" className="lg:h-96 h-48" />
      </div>
    </section>
  );
}
