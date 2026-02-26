import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 h-24">
      <div className="flex justify-between items-center xl mx-auto pl-8 text-white h-full xl:pt-10">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
