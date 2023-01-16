export const HomeScreen = () => {
  return (
    <div>
      <nav className="flex px-10 justify-between items-center border h-20">
        <div>
          <p className="text-2xl">Annukul</p>
        </div>
        <div>
          <ul className="flex w-96 justify-evenly h-20 items-center">
            <li className="text-xl hover:bg-yellow-100 hover:drop-shadow-md px-4 py-2 cursor-pointer transition-shadow transition-colors duration-300">
              Home
            </li>
            <li className="text-xl hover:bg-yellow-100 hover:drop-shadow-md px-4 py-2 cursor-pointer transition-shadow transition-colors duration-300">
              Blog
            </li>
            <li className="text-xl hover:bg-yellow-100 hover:drop-shadow-md px-4 py-2 cursor-pointer transition-shadow transition-colors duration-300">
              About
            </li>
            <li className="text-xl hover:bg-yellow-100 hover:drop-shadow-md px-4 py-2 cursor-pointer transition-shadow transition-colors duration-300">
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
