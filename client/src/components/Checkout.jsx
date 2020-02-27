import React from 'react';

class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: false
		};
	}

	handleClick = () => {
		if (this.state.status === true) {
			this.setState({
				status: false
			});
		} else {
			this.setState({
				status: true
			});
		}
	};

	render() {
		const { status } = this.state;
		return (
			<div className="container mt-5">
				<h1>
					<b>Check out our newest and most popular</b>
				</h1>
				<h1>
					<b>Nanodegree programs</b>
				</h1>
				<h1 style={{ width: 60, height: 5, backgroundColor: '#F0123C' }} />
				<div className="mt-4">
					<p>
						with our growing catalog of ever 30 Nanodegree programs from begineer<br />o advanced, you're
						sure to find one that fits yur carre goals
					</p>
				</div>
				<div className="card-deck">
					<div className="card" style={{borderBottom : '1rem solid grey'}}>
						<div class="bg-dark text-white">
							<img
								src="https://miro.medium.com/max/11782/0*k_WAaynCKINZv1x5"
								className="card-img"
								alt="computer"
							/>
							<div className="card-img-overlay">
								<h5 className="card-title">
									<b>School of</b>
								</h5>
								<h4>
									<b>Business</b>
								</h4>
							</div>
						</div>
						<div className="card-body">
							<h5 className="card-title text-center">
								<b>UI Designing</b>{' '}
							</h5>
						</div>
					</div>
					<div className="card" style={{borderBottom : '1rem solid grey'}}>
						<div class="bg-dark text-white">
							<img
								src="https://miro.medium.com/max/11782/0*k_WAaynCKINZv1x5"
								className="card-img"
								alt="computer1"
							/>
							<div className="card-img-overlay">
								<h5 className="card-title">
									<b>School of</b>
								</h5>
								<h4>
									<b>Data Science</b>
								</h4>
							</div>
						</div>
						<div className="card-body">
							<h5 className="card-title text-center">
								<b>Data Streaming</b>
							</h5>
						</div>
					</div>
					<div className="card" style={{borderBottom : '1rem solid grey'}}>
						<div className="bg-dark text-white">
							<img
								src="https://miro.medium.com/max/11782/0*k_WAaynCKINZv1x5"
								className="card-img"
								alt="computer2"
							/>
							<div className="card-img-overlay">
								<h5 className="card-title">
									<b>School of</b>
								</h5>
								<h4>
									<b>Artificial Intelligence</b>
								</h4>
							</div>
						</div>
						<div className="card-body">
							<h5 className="card-title text-center">
								<b>AI Product Manager</b>
							</h5>
						</div>
					</div>
				</div>
				{status ? (
					<div className="card-deck mt-3">
						<div className="card" style={{borderBottom : '1rem solid grey'}}>
							<div class="bg-dark text-white">
								<img
									src="https://miro.medium.com/max/11782/0*k_WAaynCKINZv1x5"
									className="card-img"
									alt="computer"
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">
										<b>School of</b>
									</h5>
									<h4>
										<b>Business</b>
									</h4>
								</div>
							</div>
							<div className="card-body">
								<h5 className="card-title text-center">
									<b>UI Designing</b>{' '}
								</h5>
							</div>
						</div>
						<div className="card" style={{borderBottom : '1rem solid grey'}}>
							<div class="bg-dark text-white">
								<img
									src="https://miro.medium.com/max/11782/0*k_WAaynCKINZv1x5"
									className="card-img"
									alt="computer1"
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">
										<b>School of</b>
									</h5>
									<h4>
										<b>Data Science</b>
									</h4>
								</div>
							</div>
							<div className="card-body">
								<h5 className="card-title text-center">
									<b>Data Streaming</b>
								</h5>
							</div>
						</div>
						<div className="card" style={{borderBottom : '1rem solid grey'}}>
							<div className="bg-dark text-white">
								<img
									src="https://miro.medium.com/max/11782/0*k_WAaynCKINZv1x5"
									className="card-img"
									alt="computer2"
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">
										<b>School of</b>
									</h5>
									<h4>
										<b>Artificial Intelligence</b>
									</h4>
								</div>
							</div>
							<div className="card-body">
								<h5 className="card-title text-center">
									<b>AI Product Manager</b>
								</h5>
							</div>
						</div>
					</div>
				) : null}
				<div className='mt-5 text-center'>
					<button type="button" className="btn btn-outline-danger" onClick={this.handleClick}>
						See All Programs
					</button>
				</div>
			</div>
		);
	}
}

export default Checkout;
