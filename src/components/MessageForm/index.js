import React from 'react';
import PropTypes from 'prop-types';
import { Comment, Avatar, Input, Form, Button } from 'antd';

const MessageForm = ({ user, isLoading, onClick }) => {
	const [content, setContent] = React.useState('');

	const handleSetContent = (e) => setContent(e.target.value);

	const handleClick = () => {
		onClick(content);
		setContent('');
	};

	return (
		<Comment
			avatar={<Avatar src={user.avatar_url} alt={user.first_name} />}
			content={
				<>
					<Form.Item>
						<Input.TextArea
							rows={4}
							onChange={handleSetContent}
							value={content}
							placeholder="Type your message..."
						/>
					</Form.Item>
					<Form.Item>
						<button
							className="ant-btn ant-btn-primary"
							onClick={handleClick}
							disabled={!content}
						>
							Send
						</button>
					</Form.Item>
				</>
			}
		/>
	);
};

MessageForm.propTypes = {
	user: PropTypes.object.isRequired,
	isLoading: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default MessageForm;
