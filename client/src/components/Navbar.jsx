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
					<a className="navbar-brand" style={{ fontFamily: 'Poppins', color: '#F0123C', fontSize : 30 }}>
						<m>Acechool.in</m>
					</a>
                    <div className='text-center'>
                        <p className='mt-3' style={{ fontFamily: 'Poppins'}}><b>Home</b><span style={{marginLeft : 35}}><b>Contact us</b></span></p>
                    </div>
					<form className="form-inline">
						<button className="btn my-2 my-sm-0" style={{backgroundColor : '#F0123C', color : '#FFFFFF', width : 165.93 , height : 75.78 }} type="submit">
							<b>sign in</b>
						</button>
					</form>
				</nav>
			</div>
		);
	}
}

export default Navbar;
