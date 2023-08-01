import { React } from "react"
import { HashLink as Anchor } from "react-router-hash-link"

function Nav({ handleMenuToggle }) {
	return (
		<nav className="nav" onClick={handleMenuToggle}>
			<ul className="nav__ul" id="js-nav">
				<li className="nav__li">
					<Anchor className="nav__a" to="#about">
						About
					</Anchor>
				</li>
				<li className="nav__li">
					<Anchor className="nav__a" to="#work">
						Work
					</Anchor>
				</li>
				<li className="nav__li">
					<Anchor className="nav__a" to="#skills">
						Skills{" "}
					</Anchor>
				</li>
				<li className="nav__li">
					<Anchor className="nav__a" to="#experience">
						Experience
					</Anchor>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
