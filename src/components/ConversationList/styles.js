import styled from 'styled-components';

export const List = styled.div`
	height: 85vh;
	overflow-y: auto;
	width: 25%;
`;

export const ListItem = styled.div`
	margin: 8px 8px 8px 0;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 20px;
	background-color: white;
	cursor: pointer;

	& > .ant-avatar {
		margin-right: 15px;
	}
`;
