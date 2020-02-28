import React from 'react';

class Cards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container mt-5" style={{ fontFamily: 'Poppins' }}>
				<div className="row">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div class="mb-3" style={{ maxWidth: 540 }}>
							<div class="row no-gutters">
								<div class="col-md-4">
									<img
										src="https://miro.medium.com/max/11782/0*k_WAaynCKINZv1x5"
										class="img-fluid"
										alt="computer"
										style={{ height: 243.73, width: 326.67 }}
									/>
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<h6 class="card-title">
											<b>Real-world projects from industry experts</b>
										</h6>
										<p class="card-text">
											With real world projects and immersive content built in partnership with top
											tier companies, you’ll master the tech skills companies want.
										</p>
										<p class="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More -></b>
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div class="mb-3" style={{ maxWidth: 540 }}>
							<div class="row no-gutters">
								<div class="col-md-4">
									<img
										src="https://miro.medium.com/max/11782/0*k_WAaynCKINZv1x5"
										class="img-fluid"
										alt="computer"
										style={{ height: 243.73, width: 326.67 }}
									/>
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<h6 class="card-title">
											<b>Personal career coach and career services</b>
										</h6>
										<p class="card-text">
											You’ll have access to career coaching sessions, interview prep advice, and
											resume and online professional profile reviews to help you grow in your
											career.
										</p>
										<p class="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More -></b>
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div class="mb-3" style={{ maxWidth: 540 }}>
							<div class="row no-gutters">
								<div class="col-md-4">
									<img
										src="https://miro.medium.com/max/11782/0*k_WAaynCKINZv1x5"
										class="img-fluid"
										alt="computer"
										style={{ height: 243.73, width: 326.67 }}
									/>
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<h6 class="card-title">
											<b>1-on-1 technical mentor</b>
										</h6>
										<p class="card-text">
											Get a knowledgeable mentor who guides your learning and is focused on
											answering your questions, motivating you and keeping you on track.
										</p>
										<p class="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More -></b>
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div class="mb-3" style={{ maxWidth: 540 }}>
							<div class="row no-gutters">
								<div class="col-md-4">
									<img
										src="https://miro.medium.com/max/11782/0*k_WAaynCKINZv1x5"
										class="img-fluid"
										alt="computer"
										style={{ height: 243.73, width: 326.67 }}
									/>
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<h6 class="card-title">
											<b>Flexible learning program</b>
										</h6>
										<p class="card-text">
											Get a custom learning plan tailored to fit your busy life. Learn at your own
											pace and reach your personal goals on the schedule that works best for you.
										</p>
										<p class="card-text">
											<small style={{ color: '#F0123C' }}>
												<b>Learn More -></b>
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

export default Cards;
