import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="flex items-center justify-between px-5 py-2" >
      <h1>
        <a href="/">My Blog</a>
      </h1>
      <nav>
        <ul className="flex items-center gap-5" >
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/products" >Products</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/login" >Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar