import React from 'react';

class Find extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container-fluid text-center" style={{ color: 'white', backgroundColor: '#F0123C' }}>
				<h6 style={{ color: '#F0123C' }}>p</h6>
				<h3 className="mt-3">Find the right learning path for you</h3>
				<p className="mt-4">
					Match your goals to our programs, explore your options, and map out your path to success
				</p>
				<div>
					<button type="button" className="btn mb-4" style={{ backgroundColor: 'white', color: '#F0123C' }}>
						Explore by school
					</button>
					<span>
						<button
							type="button"
							className="btn btn-outline-light mb-4 ml-2"
							style={{ color: 'white'}}
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
