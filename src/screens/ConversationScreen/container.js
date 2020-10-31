import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as conversationActionCreators } from 'ducks/conversationDuck';
import { actionCreators as userActionCreators } from 'ducks/userDuck';

import ConversationComponent from './component';

const mapStateToProps = (state) => {
	const {
		conversations,
		messages,
		isLoading,
		currentConversationId
	} = state.conversation;

	const { user } = state.user;

	return { conversations, messages, isLoading, user, currentConversationId };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			...conversationActionCreators,
			...userActionCreators
		},
		dispatch
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConversationComponent);
