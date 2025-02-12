import { Button } from '@/components/ui/button';
import girl from '@/assets/images/hero/girl.png';
import girl2 from '@/assets/images/hero/girl2.png';
export function Hero() {
  return (
    <section className="w-full min-h-[500px] my-20 overflow-hidden flex ">
      <div className="w-full container mx-auto flex md:flex-row flex-col items-center md:justify-between justify-center">
        <div className="lg:w-[800px] md:w-[400xl] w-[300px] space-y-4">
          <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-2xl font-bold">
            Moda para todas as estações
          </h1>
          <h2 className="text-orange-600 text-2xl font-bold">MUDE!</h2>
          <h3 className="text-slate-600 text-2xl">
            Estilo para todos os gostos, faça seu próprio estilo.
          </h3>
          <Button variant="default" className="mt-10">
            Shopp Now
          </Button>
        </div>
        <div className="flex relative justify-center items-center md:mt-0 mt-5">
          <img
            src={girl}
            alt="image-hero"
            className="lg:max-h-[500px] md:h-[300px] h-[200px] md:ml-40 rounded-full"
          />
          <img
            src={girl2}
            alt="image2-hero"
            className="lg:max-h-[500px] md:h-[300px] h-[200px]  md:ml-40 absolute md:right-40 right-20 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
