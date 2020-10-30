import React from 'react';
import PropTypes from 'prop-types';
import ConversationList from '../../components/ConversationList';
import MessageList from '../../components/MessageList';

import * as S from './styles';

const ConversationComponent = ({
	getConversations,
	getConversationById,
	conversations,
	messages,
	isLoading
}) => {
	React.useEffect(() => getConversations(), [getConversations]);

	const handleListItemClick = (id) => {
		getConversationById(id);
	};

	return (
		<S.Layout>
			<S.Header>header</S.Header>
			<S.Content>
				<ConversationList
					conversations={conversations}
					onClick={handleListItemClick}
				/>
				<S.ListWrapper>
					<MessageList messages={messages} isLoading={isLoading} />
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
