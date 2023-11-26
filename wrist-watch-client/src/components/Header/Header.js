import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

function Header() {
	const currentLocation = useLocation();

	const activeLink = (link) => {
		return link === currentLocation.pathname;
	};

	return (
		<>
			<header className="Header">
				<nav className="Nav">
					<Link to="/" className={activeLink("/") ? "active" : ""}>
						Timer
					</Link>
					<Link
						to="/excercises"
						className={activeLink("/excercises") ? "active" : ""}>
						Excercise List
					</Link>
				</nav>
			</header>
		</>
	);
}

export default Header;
