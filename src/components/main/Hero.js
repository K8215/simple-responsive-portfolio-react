import React from "react"
import { HashLink as Anchor } from "react-router-hash-link"

function Hero() {
	return (
		<section className="hero">
			<div className="container">
				<h1 className="hero__heading">
					Hi I'm Me. <br />I make things.
				</h1>
				<Anchor to="#work" className="btn btn--special">
					See My Work
				</Anchor>
			</div>
		</section>
	)
}

export default Hero
