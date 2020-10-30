import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as conversationActionCreators } from 'ducks/conversationDuck';

import ConversationComponent from './component';

const mapStateToProps = (state) => {
	const { conversations, messages } = state.conversation;
	return { conversations, messages };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			...conversationActionCreators
		},
		dispatch
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConversationComponent);
