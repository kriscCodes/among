import Crewmates from "./assets/Crewmates.png";
import { useState } from "react";
import "./index.css"
const Create = () => {
    const [attributes, setAttributes] = useState({
        name: '',
        speed: '',
        color: ''
    })

    const [name, setName] = useState('')
    const [speed, setSpeed] = useState('')
    const [color, setColor] = useState('')
    const sendInfo = (e) => {
        e.preventDefault();
        // setAttributes({...attributes,})
        console.log(name)
        console.log(speed)
    }

    const handleChange = (e) => {
        setName(e.target.value);
        setSpeed(e.target.value);
    }

    return (
			<>
				<div className="container create">
					<h1>Create a New Crewmate</h1>
					<img src={Crewmates} alt="Crewmates"></img>
					<form>
						<div className="forms">
							<div className="formCard">
								<h1>Name</h1>
								<input type="text" placeholder="Enter Crewmate's Name" onChange={handleChange}></input>
							</div>
							<div className="formCard">
								<h1>Speed (mph)</h1>
								<input type="text" placeholder="Enter speed in mph" onChange={handleChange}></input>
							</div>
							<div className="formCard">
								<h1>Color</h1>
								<div className="radioItem">
									<input type="radio" value="red" />
									<label htmlFor="red">Red</label>
								</div>
								<div className="radioItem">
									<input type="radio" value="green" />
									<label htmlFor="green">Green</label>
								</div>
								<div className="radioItem">
									<input type="radio" value="blue" />
									<label htmlFor="blue">Blue</label>
								</div>
								<div className="radioItem">
									<input type="radio" value="purple" />
									<label htmlFor="purple">Purple</label>
								</div>
								<div className="radioItem">
									<input type="radio" value="yellow" />
									<label htmlFor="yellow">Yellow</label>
								</div>
								<div className="radioItem">
									<input type="radio" value="orange" />
									<label htmlFor="orange">Orange</label>
								</div>
								<div className="radioItem">
									<input type="radio" value="pink" />
									<label htmlFor="pink">Pink</label>
								</div>
								<div className="radioItem">
									<input type="radio" value="rainbow" />
									<label htmlFor="rainbow">Rainbow</label>
								</div>
							</div>
						</div>
					</form>

					<button type="submit" onClick={sendInfo}>Create a Crewmate</button>
				</div>
			</>
		);
}

export default Create;