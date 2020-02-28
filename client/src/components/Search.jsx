import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activearr: 0,
			filteredarr: [],
			showarr: false,
			userInput: ''
		};
	}
	static propTypes = {
		arr: PropTypes.instanceOf(Array)
	};
	static defaultProps = {
		arr: []
	};

	handleChange = (e) => {
		const { arr } = this.props;
		const userInput = e.target.value;
		const filteredarr = arr.filter((arr) => arr.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
		this.setState({
			activearr: 0,
			filteredarr,
			showarr: true,
			userInput: e.target.value
		});
	};

	handleClick = (e) => {
		this.setState({
			activearr: 0,
			filteredarr: [],
			showarr: false,
			userInput: e.target.innerText
		});
	};

	render() {
		const { activearr, filteredarr, showarr, userInput } = this.state;
		const { handleChange, handleClick } = this;
		let arrListComponent;
		if (showarr && userInput) {
			if (filteredarr.length) {
				arrListComponent = (
					<ul className="container text-center" style={{ width: 546.06 }}>
						{filteredarr.map((arr, index) => {
							let className;
							if (index === activearr) {
								className = 'arractive';
							}
							return (
								<li className={className} key={arr} onClick={handleClick}>
									{arr}
								</li>
							);
						})}
					</ul>
				);
			} else {
				arrListComponent = (
					<div className="no-arr">
						<em>No Suggestions</em>
					</div>
				);
			}
		}

		return (
			<div className="container text-center mt-5">
				<div>
					<input
						type="text"
						onChange={handleChange}
						value={userInput}
						placeholder="what do you want to learn?"
						style={{ width: 546.06, height: 59.49 }}
					/>
					{arrListComponent}
					<span>
						<button
							className="btn my-2 my-sm-0"
							style={{ backgroundColor: '#F0123C', color: '#FFFFFF', width: 150, height: 59.82 }}
							type="submit"
						>
							Search
						</button>
					</span>
				</div>
			</div>
		);
	}
}

export default Search;
