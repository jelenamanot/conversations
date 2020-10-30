import React from 'react';
import PropTypes from 'prop-types';
import { Comment, Avatar, Input, Form, Button } from 'antd';

const MessageForm = ({ user, isLoading, onClick }) => {
	const [content, setContent] = React.useState('');

	return (
		<Comment
			avatar={<Avatar src={user.avatar_url} alt={user.first_name} />}
			content={
				<>
					<Form.Item>
						<Input.TextArea
							rows={4}
							onChange={(e) => setContent(e.target.value)}
							value={content}
							placeholder="Type your message..."
						/>
					</Form.Item>
					<Form.Item>
						<Button
							htmlType="submit"
							loading={isLoading}
							onClick={() => {
								onClick(content);
								setContent('');
							}}
							type="primary"
							disabled={!content}
						>
							Send
						</Button>
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
