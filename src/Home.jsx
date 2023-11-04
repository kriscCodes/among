import "./index.css"
import Ship from "./assets/Ship.png"
import Crewmates from "./assets/Crewmates.png"
const Home = () => {
    return (
			<div className="container home">
				<h1>Welcome to the Crewmate Creator!</h1>
				<p>
					Here is where you can create your very own set of crewmates bfore
					sending them off into space!
				</p>
				<img src={Crewmates} alt="Crewmates"></img>
				<img src={Ship} alt="Spaceship"></img>
			</div>
		);
}

export default Home;