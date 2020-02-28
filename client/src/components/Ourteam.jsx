import React from 'react';

class Ourteam extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="bg-light container-fluid mt-5" style={{fontFamily: 'Poppins'}}>
				<div className="container text-center">
					<p style={{color : "#F8F9FA"}}>p</p>
                    <div className='mt-2 mb-5 text-center'>
						<p style={{ fontSize : 41.69, height : 63}}><m>Our Team</m></p>
					</div>
					<div className="card-deck">
						<div className="card mb-5" style={{maxWidth : 374, maxHeight : 538 }}>
							<img
								src="https://cdn.wallpapersafari.com/20/43/gMr41D.jpg"
								style={{ height: 373.33}}
								className="card-img-top"
								alt="pic1"
							/>
							<div className="card-body">
								<p className="card-title">
									<b style={{fontSize : 22.81}}>Card title</b>
								</p>
								<p className="text-muted" style={{fontSize : 14.52}}>ANALYST</p>
								<p className="card-text" style={{fontSize : 15.56}}>
									This card has supporting text below as a natural lead-in to additional content.
								</p>
							</div>
						</div>
						<div className="card mb-5" style={{maxWidth : 374, maxHeight : 538 }}>
							<img
								src="https://cdn.wallpapersafari.com/20/43/gMr41D.jpg"
								style={{ height: 373.33}}
								className="card-img-top"
								alt="pic2"
							/>
							<div className="card-body">
								<p className="card-title">
									<b style={{fontSize : 22.81}}>Card title</b>
								</p>
								<p className="text-muted" style={{fontSize : 14.52}}>ANALYST</p>
								<p className="card-text" style={{fontSize : 15.56}}>
									This card has supporting text below as a natural lead-in to additional content.
								</p>
							</div>
						</div>
						<div className="card mb-5" style={{maxWidth : 374, maxHeight : 538 }}>
							<img
								src="https://cdn.wallpapersafari.com/20/43/gMr41D.jpg"
                                style={{ height: 373.33}}
								className="card-img-top"
								alt="pic3"
							/>
							<div className="card-body">
								<p className="card-title">
									<b style={{fontSize : 22.81}}>Card title</b>
								</p>
								<p className="text-muted" style={{fontSize : 14.52}}>ANALYST</p>
								<p className="card-text" style={{fontSize : 15.56}}>
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
