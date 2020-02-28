import React from 'react';

// Components
import Navbar from './components/Navbar';
import Beindemand from './components/Beindemand';
import Search from './components/Search';
import Partners from './components/Partners';
import Carousel from './components/Carousel';
import Nanodegree from './components/Nanodegree';
import Cards from './components/Cards';
import Ready from './components/Ready';
import Checkout from './components/Checkout';
import Ourteam from './components/Ourteam';
import Find from './components/Find';
import Footer from './components/Footer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Navbar />
				<Beindemand />
				<Search
					arr={[
						'Be', 'in', 'demand', 'learn', 'the', 'latest', 'tech', 'skills', 'to', 'propel', 'your', 'carrer', 'forward'
					]}
				/>
				<Partners />
				<Carousel />
				<Nanodegree />
				<Cards />
				<Ready />
				<Checkout />
				<Ourteam />
				<Find />
				<Footer />
			</div>
		);
	}
}

export default App;
