import React from 'react';

class Beindemand extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container text-center mt-5">
				<h2 style={{ color: '#F0123C', fontFamily: 'Poppins', fontSize : 39.41 }} ><r>Be in demand</r></h2>
				<div className='mt-3' style={{fontFamily: 'Poppins'}}>
					<h1 style={{ fontSize: 62.22 }}>
						Learn the latest <b style={{ fontSize: 72.59 }}>tech skills </b>to
					</h1>
					<h1 style={{ fontSize: 62.22 }}>
						propel your<b style={{ fontSize: 72.59 }}> carrer </b>forward
					</h1>
				</div>
			</div>
		);
	}
}

export default Beindemand;
