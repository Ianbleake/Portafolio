import { Link } from "@/i18n/routing.ts";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Joe's Portfolio
        </Link>
      </div>
      <Link href="/MyResume" className="cta-btn">Resume</Link>
    </div>
  )
}

export default Navbar;