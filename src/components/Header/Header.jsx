import See from "../../icons/See";
import PlusCircle from "../../icons/PlusCircle";
import Gift from "../../icons/Gift";
import Link from "./Link";

export default function Header({ className, ...props }) {
  return (
    <header {...props}>
      <nav className="w-full flex items-center justify-between">
        <div className="text-2xl font-bold text-white flex">
          <Gift className="h-8 w-10 block" />
          <span className="hidden sm:block">Free</span>
        </div>

        <div className="w-full">
          <ul className="flex flex-grow justify-end items-center space-x-1">
            <Link to="/registro">
              <span className="hidden md:block">Registro</span>
              <PlusCircle className="h-8 w-8 block md:hidden" />
            </Link>
            <Link to="/listado">
              <span className="hidden md:block">Listado</span>
              <See className="h-8 w-8 block md:hidden" />
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
