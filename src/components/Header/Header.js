import "./Header.css";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import { useState } from "react";
import DropDown from "../DropDown/DropDown";

function Header({ switchRef }) {
	const navigate = useNavigate();
	const [user, setUser] = useState({ username: undefined });
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<div className="Header">
			<Link
				to={{ pathname: "/" }}
				style={{ height: "75%", minWidth: "fit-content" }}
			>
				<Logo />
			</Link>
			<div className="header-navbar">
				<Link
					to={{ pathname: "home" }}
					color={"var(--white)"}
				>
					Home
				</Link>
				<Link
					to={{ pathname: "" }}
					color={"var(--white)"}
				>
					Forum
				</Link>

				<DropDown
					id={"header-profile-container"}
					onClick={() => {
						navigate("/login");
					}}
					element={
						<div
							style={{
								width: "fit-content",
								display: "flex",
								justifyContent: "flex-end",
								alignItems: "center",
								gap: ".5rem",
							}}
						>
							<h6 className="nomargin white nowrap">
								{loggedIn ? user.username : "Login"}
							</h6>
							<PersonCircle
								className="white"
								size={40}
							/>
						</div>
					}
					list={
						<>
							<Link
								className="white"
								to={{ pathname: "/login" }}
							>
								Login
							</Link>
							<Link
								className="white"
								to={{ pathname: "/register" }}
							>
								Register
							</Link>
						</>
					}
				/>
			</div>
		</div>
	);
}

export default Header;
