import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useModelAdminAuth } from '@/pages/products/admin/model.admin';
import { HiMenuAlt2 } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { ModelHeader } from '../model-header';
import { IoPerson } from 'react-icons/io5';
import { MdDashboard, MdOutlineHandyman } from 'react-icons/md';

interface CartProps {}
export function MenuMobile({}: CartProps) {
  const { data } = ModelHeader();
  const { data: checkAdm } = useModelAdminAuth();
  return (
    <Sheet>
      <SheetTrigger className={``}>
        {' '}
        <HiMenuAlt2 className="text-2xl" />
      </SheetTrigger>
      <SheetContent className="w-60">
        <SheetHeader>
          <SheetTitle className="mb-8 text-2xl">Menu</SheetTitle>
        </SheetHeader>
        <nav className="md:flex items-center h-full ">
          <ul className="gap-x-8 flex flex-col  ">
            {data.menuLinks.map((menu) => {
              return (
                <NavLink
                  key={menu.title}
                  to={menu.route}
                  className="cursor-pointer text-xl gap-x-2 flex items-center text-orange-500"
                >
                  {menu.icon && <menu.icon />} {menu.title}
                </NavLink>
              );
            })}
            {checkAdm.userAdmin?.status === 200 ? (
              <>
                <NavLink
                  to={'/productmanagement'}
                  className="cursor-pointer flex items-center gap-x-2   text-xl text-red-500"
                >
                  <MdOutlineHandyman /> Gerenciamento
                </NavLink>
                <NavLink
                  to={'/dashboard'}
                  className="cursor-pointer flex items-center gap-x-2  text-xl  text-red-500"
                >
                  <MdDashboard /> Dashboard
                </NavLink>
              </>
            ) : (
              ''
            )}
            <li className=" cursor-pointer text-gray-500">
              <NavLink
                to="/auth"
                className="flex items-center gap-x-2  text-xl text-orange-500"
              >
                <IoPerson />
                <h3>Entrar</h3>
              </NavLink>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
