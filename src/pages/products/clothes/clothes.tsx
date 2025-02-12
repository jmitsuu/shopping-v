import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Links } from './model.clothes';

export function Clothes() {
  const location = useLocation();
  const findGenderTitle = location.search.replace('?gender=', '');

  return (
    <section className="min-h-screen">
      <nav className="flex justify-center space-x-3 w-full mt-3">
        {Links.map((link) => {
          return (
            <NavLink key={link.id} to={link.route}>
              {link.title}
            </NavLink>
          );
        })}
      </nav>
      <h1 className="text-center mt-10 text-6xl text-gray-400">
        {findGenderTitle === '' ? 'Moda Completa' : ''}
        {findGenderTitle != '' && findGenderTitle === 'male'
          ? 'Moda Masculina'
          : ''}
        {findGenderTitle != '' && findGenderTitle === 'female'
          ? 'Moda Feminina'
          : ''}
      </h1>
      <Outlet />
    </section>
  );
}
