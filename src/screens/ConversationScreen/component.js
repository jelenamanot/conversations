import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import ConversationList from '../../components/ConversationList';
import MessageList from '../../components/MessageList';
import MessageForm from '../../components/MessageForm';
import ConversationHeader from '../../components/ConversationHeader';

import * as S from './styles';

const ConversationComponent = ({
	getConversations,
	getConversationById,
	conversations,
	messages,
	isLoading,
	user,
	getUser,
	postMessage
}) => {
	const [participant, setParticipant] = React.useState({});

	React.useEffect(() => {
		getUser();
		getConversations();
	}, [getUser, getConversations]);

	const handleListItemClick = (id, currParticipant) => {
		getConversationById(id);
		setParticipant(currParticipant);
	};

	const handleSendClick = (content) => {
		postMessage(content);
	};

	return (
		<S.Layout>
			<Header user={user} />
			<S.Content>
				<ConversationList
					conversations={conversations}
					onClick={handleListItemClick}
					loggedUserId={user.id}
				/>
				<S.ListWrapper>
					{messages.length ? (
						<ConversationHeader participant={participant} />
					) : null}
					<MessageList
						messages={messages}
						isLoading={isLoading}
						loggedUserId={user.id}
					/>
					{messages.length ? (
						<MessageForm
							isLoading={isLoading}
							user={user}
							onClick={handleSendClick}
						/>
					) : null}
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
