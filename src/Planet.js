import React from 'react';

class Planet extends React.Component {
	render() {
		return (
			<section className="planet-info">
			<div className="planet-name">
				Horácio
			</div>
			<div className="planet-rotation_period">
				10h
			</div>
			<div className="planet-orbital_period">
				20h
			</div>
			<div className="planet-diameter">
				19m
			</div>
			<div className="planet-climate">
				Temperado
			</div>
			<div className="planet-gravity">
				1 gravidade
			</div>
			<div className="planet-terrain">
				Planícies
			</div>
			<div className="planet-surface_water">
				50%
			</div>
			<div className="planet-population">
				Muita gente
			</div>
		</section>
		)
	}  
}

export default Planet;