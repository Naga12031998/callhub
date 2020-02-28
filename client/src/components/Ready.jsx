import React from 'react';

class Ready extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container-fluid text-center mt-5" style={{ color: 'white', backgroundColor: 'black', fontFamily: 'Poppins' }}>
				<h6 style={{color : 'black'}}>p</h6>
                <h2 className="mt-3">Ready to begin?</h2>
				<p className="mt-4" >Enroll in a nanodegree program and build your best future today</p>
				<button type="button" className="btn mb-4" style={{ backgroundColor: 'white', color: '#F0123C', width : 280, height : 55.56}}>
					see our programs
				</button>
			</div>
		);
	}
}

export default Ready;
