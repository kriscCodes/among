import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
			<>
				<div className="nav">
					<Link to="/">
						<h1>Home</h1>
					</Link>
					<Link to="/create">
						<h1>Create A Crewmate</h1>
					</Link>
					<Link to="/gallery">
						<h1>Crewmate Gallery</h1>
					</Link>
				</div>
			</>
		);
}

export default Sidebar;