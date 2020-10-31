import styled from 'styled-components';

export const ConversationHeader = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid lightgrey;
	padding: 0 5px 0 0;
	justify-content: space-between;
`;

export const Left = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > .ant-avatar {
		margin: 10px;
	}

	& > .ant-typography {
		margin: 0;
	}
`;

export const Icons = styled.div`
	& > span {
		font-size: 20px;
		margin-right: 20px;
	}
`;
