import React from 'react';

class Ourteam extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="bg-light container-fluid mt-5">
				<div className="container text-center">
					<p style={{color : "#F8F9FA"}}>p</p>
                    <div className='mt-2 mb-5'>
						<h2>Our Team</h2>
					</div>
					<div className="card-deck">
						<div className="card mb-5">
							<img
								src="https://cdn.wallpapersafari.com/20/43/gMr41D.jpg"
								style={{ height: 250 }}
								className="card-img-top"
								alt="pic1"
							/>
							<div className="card-body">
								<h5 className="card-title">
									<b>Card title</b>
								</h5>
								<p className="text-muted">ANALYST</p>
								<p className="card-text">
									This card has supporting text below as a natural lead-in to additional content.
								</p>
							</div>
						</div>
						<div className="card mb-5">
							<img
								src="https://cdn.wallpapersafari.com/20/43/gMr41D.jpg"
								style={{ height: 250 }}
								className="card-img-top"
								alt="pic2"
							/>
							<div className="card-body">
								<h5 className="card-title">
									<b>Card title</b>
								</h5>
								<p className="text-muted">ANALYST</p>
								<p className="card-text">
									This card has supporting text below as a natural lead-in to additional content.
								</p>
							</div>
						</div>
						<div className="card mb-5">
							<img
								src="https://cdn.wallpapersafari.com/20/43/gMr41D.jpg"
								style={{ height: 250 }}
								className="card-img-top"
								alt="pic3"
							/>
							<div className="card-body">
								<h5 className="card-title">
									<b>Card title</b>
								</h5>
								<p className="text-muted">ANALYST</p>
								<p className="card-text">
									This card has supporting text below as a natural lead-in to additional content.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Ourteam;
