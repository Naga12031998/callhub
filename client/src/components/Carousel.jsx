import React from 'react';

import './index.css';

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="container-fluid mt-5" style={{fontFamily: 'Poppins'}}>
				<div className="row">
					<div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12">
						<h1>
							<b>Discover your</b>
						</h1>
						<h1>
							<b>perfect program in our schools</b>
						</h1>
						<h1 style={{ width: 60, height: 5, backgroundColor: '#F0123C' }} />
					</div>
					<div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12">
						<a
							className="carousel-control-1 bg-dark rounded"
							href="#carouselExampleControls"
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon" style={{ height: 10 }} aria-hidden="true" />
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-2 bg-dark ml-3 rounded"
							href="#carouselExampleControls"
							role="button"
							data-slide="next"
						>
							<span className="carousel-control-next-icon" style={{ height: 10 }} aria-hidden="true" />
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
				<div id="carouselExampleControls" className="carousel slide mt-5" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="card-deck">
								<div className="card shadow" id="mouseRollOn">
									<div className="card-body">
										<h6 style={{ color: '#F0123C' }}>School of</h6>
										<h5 className="card-title">
											<b>Data Science</b>
										</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
										<p className="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More</b>
												<span className="mt-1" style={{ float: 'right' }}>
													<div style={{ color: '#F0123C' }}>
														<b style={{ backgroundColor: 'white' }} className="rounded">
															-->
														</b>
													</div>
												</span>
											</small>
										</p>
									</div>
								</div>
								<div className="card shadow" id="mouseRollOn">
									<div className="card-body">
										<h6 style={{ color: '#F0123C' }}>School of</h6>
										<h5 className="card-title">
											<b>Artificial Intelligence</b>
										</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
										<p className="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More</b>
												<span className="mt-1" style={{ float: 'right' }}>
													<div style={{ color: '#F0123C' }}>
														<b style={{ backgroundColor: 'white' }} className="rounded">
															-->
														</b>
													</div>
												</span>
											</small>
										</p>
									</div>
								</div>
								<div className="card shadow" id="mouseRollOn">
									<div className="card-body">
										<h6 style={{ color: '#F0123C' }}>School of</h6>
										<h5 className="card-title">
											<b>Programming</b>
										</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
										<p className="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More</b>
												<span className="mt-1" style={{ float: 'right' }}>
													<div style={{ color: '#F0123C' }}>
														<b style={{ backgroundColor: 'white' }} className="rounded">
															-->
														</b>
													</div>
												</span>
											</small>
										</p>
									</div>
								</div>
								<div className="card shadow" id="mouseRollOn">
									<div className="card-body">
										<h6 style={{ color: '#F0123C' }}>School of</h6>
										<h5 className="card-title">
											<b>Autonomous system</b>
										</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
										<p className="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More</b>
												<span className="mt-1" style={{ float: 'right' }}>
													<div style={{ color: '#F0123C' }}>
														<b style={{ backgroundColor: 'white' }} className="rounded">
															-->
														</b>
													</div>
												</span>
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="card-deck">
								<div className="card shadow" id="mouseRollOn">
									<div className="card-body">
										<h6 style={{ color: '#F0123C' }}>School of</h6>
										<h5 className="card-title">
											<b>Data Science</b>
										</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
										<p className="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More</b>
												<span className="mt-1" style={{ float: 'right' }}>
													<div style={{ color: '#F0123C' }}>
														<b style={{ backgroundColor: 'white' }} className="rounded">
															-->
														</b>
													</div>
												</span>
											</small>
										</p>
									</div>
								</div>
								<div className="card shadow" id="mouseRollOn">
									<div className="card-body">
										<h6 style={{ color: '#F0123C' }}>School of</h6>
										<h5 className="card-title">
											<b>Artificial Intelligence</b>
										</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
										<p className="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More</b>
												<span className="mt-1" style={{ float: 'right' }}>
													<div style={{ color: '#F0123C' }}>
														<b style={{ backgroundColor: 'white' }} className="rounded">
															-->
														</b>
													</div>
												</span>
											</small>
										</p>
									</div>
								</div>
								<div className="card shadow" id="mouseRollOn">
									<div className="card-body">
										<h6 style={{ color: '#F0123C' }}>School of</h6>
										<h5 className="card-title">
											<b>Programming</b>
										</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
										<p className="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More</b>
												<span className="mt-1" style={{ float: 'right' }}>
													<div style={{ color: '#F0123C' }}>
														<b style={{ backgroundColor: 'white' }} className="rounded">
															-->
														</b>
													</div>
												</span>
											</small>
										</p>
									</div>
								</div>
								<div className="card shadow" id="mouseRollOn">
									<div className="card-body">
										<h6 style={{ color: '#F0123C' }}>School of</h6>
										<h5 className="card-title">
											<b>Autonomous system</b>
										</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
										<p className="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More</b>
												<span className="mt-1" style={{ float: 'right' }}>
													<div style={{ color: '#F0123C' }}>
														<b style={{ backgroundColor: 'white' }} className="rounded">
															-->
														</b>
													</div>
												</span>
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<div className="card-deck">
								<div className="card shadow" id="mouseRollOn">
									<div className="card-body">
										<h6 style={{ color: '#F0123C' }}>School of</h6>
										<h5 className="card-title">
											<b>Data Science</b>
										</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
										<p className="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More</b>
												<span className="mt-1" style={{ float: 'right' }}>
													<div style={{ color: '#F0123C' }}>
														<b style={{ backgroundColor: 'white' }} className="rounded">
															-->
														</b>
													</div>
												</span>
											</small>
										</p>
									</div>
								</div>
								<div className="card shadow" id="mouseRollOn">
									<div className="card-body">
										<h6 style={{ color: '#F0123C' }}>School of</h6>
										<h5 className="card-title">
											<b>Artificial Intelligence</b>
										</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
										<p className="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More</b>
												<span className="mt-1" style={{ float: 'right' }}>
													<div style={{ color: '#F0123C' }}>
														<b style={{ backgroundColor: 'white' }} className="img-rounded">
															-->
														</b>
													</div>
												</span>
											</small>
										</p>
									</div>
								</div>
								<div className="card shadow" id="mouseRollOn">
									<div className="card-body">
										<h6 style={{ color: '#F0123C' }}>School of</h6>
										<h5 className="card-title">
											<b>Programming</b>
										</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
										<p className="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More</b>
												<span className="mt-1" style={{ float: 'right' }}>
													<div style={{ color: '#F0123C' }}>
														<b style={{ backgroundColor: 'white' }} className="rounded">
															-->
														</b>
													</div>
												</span>
											</small>
										</p>
									</div>
								</div>
								<div className="card shadow" id="mouseRollOn">
									<div className="card-body">
										<h6 style={{ color: '#F0123C' }}>School of</h6>
										<h5 className="card-title">
											<b>Autonomous system</b>
										</h5>
										<p className="card-text">
											This card has supporting text below as a natural lead-in to additional
											content.
										</p>
										<p className="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More</b>
												<span className="mt-1" style={{ float: 'right' }}>
													<div style={{ color: '#F0123C' }}>
														<b style={{ backgroundColor: 'white' }} className="rounded">
															-->
														</b>
													</div>
												</span>
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Carousel;
