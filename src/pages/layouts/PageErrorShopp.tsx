import { FaRegFaceSadCry } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export function PageErrorShopp() {
  return (
    <section className="h-screen flex flex-col justify-center items-center w-full space-y-5">
      <h2 className="text-4xl text-slate-500">Pagina não localizada</h2>
      <FaRegFaceSadCry className="text-8xl text-red-200" />
      <Link className="text-slate-600 hover:text-slate-800" to={'/'}>
        Clique Aqui para voltar a pagina inicial.
      </Link>
    </section>
  );
}
