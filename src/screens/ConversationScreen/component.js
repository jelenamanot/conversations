import React from 'react';

const ConversationComponent = ({ getConversations }) => {
	React.useEffect(() => getConversations(), [getConversations]);

	return <div>conversations</div>;
};

export default ConversationComponent;
