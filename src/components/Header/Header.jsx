export default function Header({ className, ...props }) {
  return (
    <header {...props}>
      <nav className="w-full flex items-center justify-between">
        <a href="/" className="block text-2xl font-bold text-white">
          <span>Brand</span>
        </a>

        <div className="w-full">
          <ul className="flex flex-grow justify-end items-center space-x-1">
            <li className="bg-white text-blue-700 hover:text-blue-600 px-4 rounded-xl cursor-pointer">
              Crear
            </li>
            <li className="bg-blue-700 text-gray-300 hover:text-white px-4 rounded-xl cursor-pointer">
              Editar
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
