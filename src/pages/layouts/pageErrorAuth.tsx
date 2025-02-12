import { FaRegFaceSadCry } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export function PageErrorAuth() {
  return (
    <section className="h-screen flex flex-col items-center w-full space-y-5">
      <h2 className="text-4xl text-slate-500">Pagina não localizada</h2>
      <FaRegFaceSadCry className="text-8xl text-red-200" />
      <Link className="text-slate-600 hover:text-slate-800" to={'/auth'}>
        Clique Aqui para voltar a pagina de login
      </Link>
    </section>
  );
}
