import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import ConversationList from '../../components/ConversationList';
import MessageList from '../../components/MessageList';

import * as S from './styles';

const ConversationComponent = ({
	getConversations,
	getConversationById,
	conversations,
	messages,
	isLoading,
	user,
	getUser
}) => {
	React.useEffect(() => {
		getUser();
		getConversations();
	}, [getUser, getConversations]);

	const handleListItemClick = (id) => {
		getConversationById(id);
	};

	return (
		<S.Layout>
			<Header user={user} />
			<S.Content>
				<ConversationList
					conversations={conversations}
					onClick={handleListItemClick}
				/>
				<S.ListWrapper>
					<MessageList
						messages={messages}
						isLoading={isLoading}
						loggedUserId={user.id}
					/>
				</S.ListWrapper>
			</S.Content>
		</S.Layout>
	);
};

ConversationComponent.propTypes = {
	getConversations: PropTypes.func.isRequired,
	getConversationById: PropTypes.func.isRequired,
	conversations: PropTypes.array.isRequired
};

export default ConversationComponent;
