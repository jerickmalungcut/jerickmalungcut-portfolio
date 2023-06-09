import Logo from "../assets/logo-jrkm.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="home">
            <img src={Logo} alt="logo" className="w-[100px]" />
          </a>
          {/* button */}
          <button className="btn btn-sm">Download Resume</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
