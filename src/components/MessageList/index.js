import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Empty, Tooltip, Avatar } from 'antd';

import * as S from './styles';

const MessageList = ({ isLoading, messages }) => {
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
						// TODO
						const isUser =
							participant.id === 'c86604b2-70ca-4831-ad85-4dd419ffc28b';

						return (
							<S.Comment
								key={message.id}
								isUser={isUser}
								author={<S.Text isUser={isUser}>{fullName}</S.Text>}
								avatar={<Avatar src={participant.avatar_url} alt={fullName} />}
								content={<S.Text isUser={isUser}>{content}</S.Text>}
								datetime={
									<Tooltip title={created_at}>
										{/* <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}> */}
										{/* <span>{moment().fromNow()}</span> */}
										{created_at}
									</Tooltip>
								}
							/>
						);
					})}
				</div>
			)}
		</S.List>
	);
};

MessageList.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	messages: PropTypes.array.isRequired
};

export default MessageList;
