import React from 'react';

class Find extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container-fluid text-center" style={{  fontFamily: 'Poppins' , color: 'white', backgroundColor: '#F0123C' }}>
				<h6 style={{ color: '#F0123C' }}>p</h6>
				<p className="mt-3" style={{fontSize : 31.11}}>Find the right learning path for you</p>
				<p className="mt-4" style={{fontSize : 20.74}}>
					Match your goals to our programs, explore your options, and map out your path to success
				</p>
				<div>
					<button type="button" className="btn mb-4" style={{ backgroundColor: 'white', color: '#F0123C', width : 280, height : 63 }}>
						Explore by school
					</button>
					<span>
						<button
							type="button"
							className="btn btn-outline-light mb-4 ml-2"
							style={{ color: 'white', width : 280, height : 63}}
						>
							Explore by skills
						</button>
					</span>
				</div>
			</div>
		);
	}
}

export default Find;
