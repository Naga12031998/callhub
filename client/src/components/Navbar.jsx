import React from 'react';

// css
import './index.css';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<nav className="navbar navbar-light container">
					<a className="navbar-brand" style={{ color: '#F0123C' }}>
						Acechool.in
					</a>
                    <div className='text-center'>
                        <p className='mt-3'><b>Home</b><span style={{marginLeft : 35}}><b>Contact us</b></span></p>
                    </div>
					<form className="form-inline">
						<button className="btn my-2 my-sm-0" style={{backgroundColor : '#F0123C', color : '#FFFFFF', width : 100 , height : 50 }} type="submit">
							<b>sign in</b>
						</button>
					</form>
				</nav>
			</div>
		);
	}
}

export default Navbar;
