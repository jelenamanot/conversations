import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Avatar, Tooltip } from 'antd';
import { BellOutlined, StarOutlined, UserAddOutlined } from '@ant-design/icons';

import * as S from './styles';

const ConversationHeader = ({ participant }) => {
	const name = `${participant.first_name} ${participant.last_name}`;
	return (
		<S.ConversationHeader>
			<S.Left>
				<Avatar size={60} src={participant.avatar_url} alt={name} />
				<Typography.Title level={3}>{name}</Typography.Title>
			</S.Left>
			<S.Icons>
				<Tooltip title={'Add to friends'}>
					<UserAddOutlined />
				</Tooltip>
				<Tooltip title={'Add to favorites'}>
					<StarOutlined />
				</Tooltip>
				<Tooltip title={'Notify me'}>
					<BellOutlined />
				</Tooltip>
			</S.Icons>
		</S.ConversationHeader>
	);
};

ConversationHeader.propTypes = {
	participant: PropTypes.object
};

ConversationHeader.defaultProps = {
	participant: {}
};

export default ConversationHeader;
