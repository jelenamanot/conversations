import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow, format } from 'date-fns';
import { Spin, Empty, Tooltip, Avatar } from 'antd';

import * as S from './styles';

const MessageList = ({ isLoading, messages, loggedUserId }) => {
	const messagesEndRef = React.useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	React.useEffect(scrollToBottom, [messages]);

	return (
		<S.List>
			{isLoading && <Spin />}
			{!messages.length ? (
				<Empty description="Please choose conversation" />
			) : (
				<div>
					{messages.map((message) => {
						const { participant, created_at, content } = message;
						const fullName = `${participant.first_name} ${participant.last_name}`;
						const isUser = participant.id === loggedUserId;

						return (
							<S.Comment
								key={message.id}
								isUser={isUser}
								author={<S.Text isUser={isUser}>{fullName}</S.Text>}
								avatar={<Avatar src={participant.avatar_url} alt={fullName} />}
								content={<S.Text isUser={isUser}>{content}</S.Text>}
								datetime={
									<Tooltip
										title={format(new Date(created_at), 'yyyy-MM-dd HH:mm:ss')}
									>
										{formatDistanceToNow(new Date(created_at))}
									</Tooltip>
								}
							/>
						);
					})}
				</div>
			)}
			<div ref={messagesEndRef} />
		</S.List>
	);
};

MessageList.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	messages: PropTypes.array.isRequired
};

export default MessageList;
