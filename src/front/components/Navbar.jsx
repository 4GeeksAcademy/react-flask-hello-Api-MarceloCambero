import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto d-flex gap-2">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
					<button
						className="btn btn-outline-danger"
						onClick={() => {
							sessionStorage.removeItem("token");
							window.location.href = "/login";
						}}
					>
						Cerrar sesión
					</button>
				</div>
			</div>
		</nav>
	);
};
