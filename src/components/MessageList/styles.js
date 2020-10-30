import styled, { css } from 'styled-components';
import { Comment as C } from 'antd';

export const List = styled.div`
	height: 50vh;
	overflow-y: auto;
`;

export const Comment = styled(C)`
	padding: 0 10px;
	margin: 6px 51% 6px 0;
	border-radius: 8px;
	background-color: white;

	${({ isUser, theme }) =>
		isUser &&
		css`
			margin: 6px 0 6px 51%;
			background-color: ${theme.primaryColor};
		`};
`;

export const Text = styled.p`
	color: ${({ isUser }) => (isUser ? 'white' : 'black')};
`;
