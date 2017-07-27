import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindAcitonCreators } from 'redux';

class App extends Component{
	render(){
		return (
			<div>homework</div>
		);
	}
}

function mapStateToProps(state) {
	return{
		agents:state.agents
	};
}
function mapDispathToProps(dispath) {
	return{

	}
}

export default connect(mapStateToProps,mapDispathToProps)(App);

