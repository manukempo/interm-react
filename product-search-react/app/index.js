var React = require('react');
var ReactDOM = require('react-dom');

class Search extends React.Component{
	render(){
		return(
			<div className="search">
				<div className="search-bar">
					<input type="text" placeholder="Search"/>
				</div>
				<div className="results">
					<div className="in-stock">
						<h2><a href="#">Toothpaste</a></h2>
						<p>$2.99</p>
						<p>Lorem Ipsum is simply dummy text of the printing and 
						typesetting industry. Lorem Ipsum has been the industry's 
						standard dummy text ever since the 1500s, when an unknown 
						printer took a galley of type and scrambled it to make a type 
						specimen book.</p>
					</div>
				
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Search />, document.getElementById('app'));