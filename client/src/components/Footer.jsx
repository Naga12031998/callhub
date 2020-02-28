import React from 'react';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="container-fluid text-center" style={{  fontFamily: 'Poppins'}}>
				<div className="row" style={{ backgroundColor: '#010101', color: '#FFFFFF' }}>
					<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5 mb-5">
						<p style={{fontSize : 31.11}}>Aceschool.in</p>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5 mb-5">
						<img src="https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png" />
                        <img className='ml-2' src="https://img.icons8.com/ios-filled/30/ffffff/instagram-new.png" />
                        <img className='ml-2' src="https://img.icons8.com/ios/30/ffffff/twitter.png" />
					</div>
				</div>
				<div className="row" style={{ backgroundColor: '#151515', color: '#F9F9F9' }}>
					<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 my-3">
						<p style={{fontSize : 13.48}}>@ 2019 Rdesigns. All rights reserved</p>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 my-3">
						<p style={{fontSize : 13.48}}   >Terms and conditions / privacy policy</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
