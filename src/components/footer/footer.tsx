import { Button } from '../ui/button';
import { aboutUs } from './model.footer';
import { Input } from '@/components/ui/input';
export function Footer() {
  return (
    <section className="w-full min-h-96 bg-black p-10 py-20">
      <div className="w-full h-full mx-auto container flex md:flex-row flex-col lg:justify-between  justify-center items-center">
        <div className="w-96  h-44">
          <h1 className="text-orange-500 text-2xl">What is Lorem Ipsum?</h1>
          <h2 className="text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </h2>
          <div className="mt-5">
            <h1 className="font-bold text-white">Forma de Pagamento</h1>
            <div className="w-full flex gap-x-2 mt-2">
              <div className="h-6  w-7 bg-white rounded-md"></div>
              <div className="h-6  w-7 bg-white rounded-md"></div>
              <div className="h-6  w-7 bg-white rounded-md"></div>
              <div className="h-6  w-7 bg-white rounded-md"></div>
            </div>
          </div>
        </div>
        <div className="w-96 h-44">
          <h1 className="text-orange-500 text-2xl">Empresa</h1>

          <ul>
            {aboutUs.map((about) => {
              return (
                <li
                  className="text-slate-500 cursor-pointer hover:text-slate-300"
                  key={about.title}
                >
                  {about.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-96 h-44">
          <h1 className="text-orange-500 text-2xl">Nossos endereços</h1>
          <h2 className="text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </h2>
        </div>
        <div className="w-96 md:h-44 h-32">
          <h1 className="text-orange-500 text-2xl">Receba novidades</h1>
          <Input className="w-full bg-slate-300" placeholder="cadastre-se" />
          <Button className="mt-2 hover:opacity-50">Cadastrar</Button>
        </div>
      </div>
    </section>
  );
}
