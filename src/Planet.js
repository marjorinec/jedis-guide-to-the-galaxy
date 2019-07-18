import React from 'react';
import axios from 'axios';

class Planet extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			planetInfo: null,
			currentPlanetId: null
		}
	}

	async componentDidUpdate(prevProps, prevState) {
		
		if (this.props.id !== undefined  && this.props.id !== this.state.currentPlanetId){
			const planet = await axios.get("https://swapi.co/api/planets/" + this.props.id)
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
			this.setState({ planetInfo: planetInfo, currentPlanetId: this.props.id })
		}
	}

	render() {
		console.log(this.state)
		if (this.state.planetInfo === null) {
			return (
			<div>
				carregando rs
			</div>
		)
		} else {
			return (
				<section className="planet-info">
					<div className="planet-name">
						{this.state.planetInfo.name}
					</div>
					<div className="planet-rotation_period">
						{this.state.planetInfo.rotation_period}
					</div>
					<div className="planet-orbital_period">
						{this.state.planetInfo.orbital_period}
					</div>
					<div className="planet-diameter">
						{this.state.planetInfo.diameter}
					</div>
					<div className="planet-climate">
						{this.state.planetInfo.climate}
					</div>
					<div className="planet-gravity">
						{this.state.planetInfo.gravity}
					</div>
					<div className="planet-terrain">
						{this.state.planetInfo.terrain}
					</div>
					<div className="planet-surface_water">
						{this.state.planetInfo.surface_water}
					</div>
					<div className="planet-population">
						{this.state.planetInfo.population}
					</div>
					<div className="random-planet-id">
						{this.props.id}
					</div>
				</section>
			)
		}
	}  
}

export default Planet;