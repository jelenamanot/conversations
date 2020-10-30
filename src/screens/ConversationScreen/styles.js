import styled from 'styled-components';
import { Layout as L } from 'antd';

export const Layout = styled(L)`
	height: 100vh;
`;

export const Header = styled(L.Header)``;

export const Content = styled(L.Content)`
	display: flex;
	flex-direction: row;
	padding: 20px 50px;
`;

export const ListWrapper = styled.div`
	width: 100%;
	margin: 0 20px;
`;
