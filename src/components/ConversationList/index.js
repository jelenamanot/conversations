import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Avatar } from 'antd';

import * as S from './styles';

const ConversationList = ({ conversations, onClick }) => {
	return (
		<S.List>
			{conversations.map((conversation) => {
				const participant = conversation.participants[1];
				const fullName = `${participant.first_name} ${participant.last_name}`;
				return (
					<S.ListItem
						key={conversation.id}
						onClick={() => onClick(conversation.id)}
					>
						<Avatar src={participant.avatar_url} alt={fullName} />
						<Typography.Text strong>{fullName}</Typography.Text>
					</S.ListItem>
				);
			})}
		</S.List>
	);
};

ConversationList.propTypes = {
	conversations: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired
};

export default ConversationList;
