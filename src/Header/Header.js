import "./Header.css";
// import plateLogo from "../assets/icons/myplate-brand.svg";

function Header() {
  return (
    <header className="header">
      <h1 style={{ color: "#074e66", fontSize: "1.1rem" }}>GNSPEN</h1>
      <div>
        <p className="header-link">MyPlate</p>
      </div>
    </header>
  );
}

export default Header;
