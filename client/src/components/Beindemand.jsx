import React from 'react';

class Beindemand extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container text-center mt-5">
				<h2 style={{ color: '#F0123C' }}>Be in demand</h2>
				<div className='mt-3'>
					<h1 style={{ fontSize: 45 }}>
						Learn the latest <b>tech skills </b>to
					</h1>
					<h1 style={{ fontSize: 45 }}>
						propel your<b> carrer </b>forward
					</h1>
				</div>
			</div>
		);
	}
}

export default Beindemand;
