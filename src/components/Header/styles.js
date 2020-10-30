import styled from 'styled-components';
import { Layout } from 'antd';

export const Header = styled(Layout.Header)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.primaryColor};
`;

export const Title = styled.h1`
	color: white;
	margin: 0;
`;

export const Text = styled.span`
	color: white;
	font-style: bold;
	margin-left: 10px;
`;
