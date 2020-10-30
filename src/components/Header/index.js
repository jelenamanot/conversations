import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Avatar } from 'antd';
import * as S from './styles';

const Header = ({ user }) => {
	const fullName = `${user.first_name} ${user.last_name}`;
	return (
		<S.Header>
			<S.Title>Conversations</S.Title>
			<Tooltip title="Your profile">
				<Avatar src={user.avatar_url} alt={fullName} />
				<S.Text>{fullName}</S.Text>
			</Tooltip>
		</S.Header>
	);
};

Header.propTypes = {
	user: PropTypes.object.isRequired
};

export default Header;
