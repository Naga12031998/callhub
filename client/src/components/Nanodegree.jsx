import React from 'react';

class Nanodegree extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container mt-5" style={{fontFamily: 'Poppins'}}>
				<h1>
					<b>All our Nanodegree</b>
				</h1>
				<h1>
					<b>Programs Include</b>
				</h1>
				<h1 style={{ width: 60, height: 5, backgroundColor: '#F0123C' }} />
			</div>
		);
	}
}

export default Nanodegree;
