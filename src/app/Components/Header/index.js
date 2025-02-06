import Logo from "../Logo";
import Navigation from "./components/Navigation";

export default function Header () {
  return (
    <div className="nav-container">
      <Logo/>
      <Navigation/>
    </div>
  )
}

