import { React, useState, useEffect } from "react"
import { HashLink as Anchor } from "react-router-hash-link"
import Nav from "./Nav"

function Header() {
	const [menu, setMenu] = useState(false)
	const [fixedNav, setFixedNav] = useState(false)
	//Store default classes for the hamburger menu so they don't have to be written twice.
	const togglerClasses = "menu-toggler hamburger hamburger--squeeze"

	//Mobile nav toggle
	const handleMenuToggle = () => {
		menu ? setMenu(false) : setMenu(true)
	}

	//Fix header on scroll
	const handleFixedNav = () => {
		if (window.scrollY >= 100) {
			setFixedNav(true)
		} else {
			setFixedNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleFixedNav)
	}, [fixedNav])

	return (
		<header
			id="js-header"
			className={`header ${menu ? "js-open" : ""} ${
				fixedNav ? "js-scrolled" : ""
			}`}
		>
			<div className="header__logo">
				<Anchor className="header__link" to="#top" aria-label="Return home">
					Logo
				</Anchor>
			</div>

			<button
				id="js-menu-toggle"
				className={menu ? `${togglerClasses} is-active` : togglerClasses}
				type="button"
				aria-label="open navigation menu"
				onClick={handleMenuToggle}
			>
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>

			<Nav handleMenuToggle={handleMenuToggle} />
		</header>
	)
}

export default Header
