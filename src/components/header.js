import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import linkStyles from "./layout.module.scss"

const Header = () => {
  return (
    <div>
      <h1>Rick Sanchez</h1>
      <ul className={linkStyles.list}>
        <li>
          <Link
            className={headerStyles.link}
            activeClassName={headerStyles.activeLink}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.link}
            activeClassName={headerStyles.activeLink}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.link}
            activeClassName={headerStyles.activeLink}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.link}
            activeClassName={headerStyles.activeLink}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
