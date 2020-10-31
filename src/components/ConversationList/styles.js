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
	border-left-width: 5px;
	border-left-style: solid;
	border-left-color: ${({ isCurrent, theme }) =>
		isCurrent ? theme.primaryColor : 'white'};

	& > .ant-avatar {
		margin-right: 15px;
	}

	@media (max-width: 992px) {
		.ant-typography {
			font-size: 12px;
		}
	}

	@media (max-width: 768px) {
		.ant-typography {
			display: none;
		}
		.ant-avatar {
			margin-right: 0;
		}
	}
`;
