import ArrowIcon from "@assets/icons/Arrow";

const Header = () => {
  return (
    <header className="flex items-end justify-center text-2xl font-semibold md:text-4xl lg:text-6xl xl:text-8xl">
      <span className="mr-2 md:mr-4">To</span>
      <ArrowIcon />
      <span className="ml-2 md:ml-4">do</span>
    </header>
  );
};

export default Header;
