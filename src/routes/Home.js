import { React } from "react"
import { HashLink as Anchor } from "react-router-hash-link"
import Header from "../components/header/Header"
import Main from "../components/main/Main"
import Footer from "../components/Footer"

function Home() {
	return (
		<>
			<Anchor className="skip-link" to="#main">
				Skip Navigation
			</Anchor>
			<Header />
			<Main />
			<Footer />
		</>
	)
}

export default Home
