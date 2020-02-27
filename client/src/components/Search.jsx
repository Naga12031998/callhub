import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchField: ''
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		const { searchField } = this.state;
		return (
			<div className="mt-5 mb-5">
				<div className="container input-group text-center" style={{ maxWidth: 540 }}>
					<input
						type="text"
						name="searchField"
						value={searchField}
						className="form-control shadow dropdown dropdown-toggle"
                        href="#"
                        onChange = {this.handleChange}
						id="dropdownMenuLink"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						placeholder="what do you want to learn?"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
					<span>
						<button
							className="btn my-2 my-sm-0"
							style={{ backgroundColor: '#F0123C', color: '#FFFFFF' }}
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
