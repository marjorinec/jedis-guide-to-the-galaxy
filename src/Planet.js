import React from 'react';
import axios from 'axios';

class Planet extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	async componentWillMount() {
		const planet = await axios.get(this.randomPlanets())
		const planetInfo = {
			name: planet.data.name,
			rotation_period: planet.data.rotation_period,
			orbital_period: planet.data.orbital_period,
			diameter: planet.data.diameter,
			climate: planet.data.climate,
			gravity: planet.data.gravity,
			terrain: planet.data.terrain,
			surface_water: planet.data.surface_water,
			population: planet.data.population
		}
		this.setState(planetInfo)
	}

	randomPlanets(){
		let url = "https://swapi.co/api/planets/"
		let planetId = Math.round(Math.random() * 94)
		
		url = url + planetId.toString()
		return url
	}	

	render() {
		return (
			<section className="planet-info">
			<div className="planet-name">
				{this.state.name}
			</div>
			<div className="planet-rotation_period">
				{this.state.rotation_period}
			</div>
			<div className="planet-orbital_period">
				{this.state.orbital_period}
			</div>
			<div className="planet-diameter">
				{this.state.diameter}
			</div>
			<div className="planet-climate">
				{this.state.climate}
			</div>
			<div className="planet-gravity">
				{this.state.gravity}
			</div>
			<div className="planet-terrain">
				{this.state.terrain}
			</div>
			<div className="planet-surface_water">
				{this.state.surface_water}
			</div>
			<div className="planet-population">
				{this.state.population}
			</div>
			<div className="random-planet-id">
				{this.state.randomPlanetId}
			</div>
		</section>
		)
	}  
}

export default Planet;