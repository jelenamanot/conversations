import React from 'react';
import { Spin } from 'antd';
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
	postMessage,
	currentConversationId
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
					currentConversationId={currentConversationId}
				/>
				<S.ListWrapper>
					<Spin spinning={isLoading}>
						{messages.length ? (
							<ConversationHeader participant={participant} />
						) : null}
						<MessageList messages={messages} loggedUserId={user.id} />
						{messages.length ? (
							<MessageForm
								isLoading={isLoading}
								user={user}
								onClick={handleSendClick}
							/>
						) : null}
					</Spin>
				</S.ListWrapper>
			</S.Content>
		</S.Layout>
	);
};

ConversationComponent.propTypes = {
	getConversations: PropTypes.func.isRequired,
	getConversationById: PropTypes.func.isRequired,
	conversations: PropTypes.array.isRequired,
	messages: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	getUser: PropTypes.func.isRequired,
	postMessage: PropTypes.func.isRequired,
	currentConversationId: PropTypes.number
};

ConversationComponent.propTypes = {
	currentConversationId: null
};

export default ConversationComponent;
