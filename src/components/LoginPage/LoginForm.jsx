import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm = () => {
	const [form] = Form.useForm();
	const [styleError, setStyle] = useState({
		display: 'none',
	});
	const onFinish = (values) => {
		let users = JSON.parse(localStorage.getItem('users'));

		const savedUser = users.filter((user) => {
			if (
				user.username === values.username.toLowerCase() &&
				user.password === values.password
			)
				if (user.token) {
					return user;
				}
			return null;
		});

		if (savedUser.length) {
			console.log('Correct!');
			setStyle({ display: 'none' });
			form.resetFields();
		} else {
			console.log('Incorrect');
			setStyle({ color: 'red' });
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			name='basic'
			form={form}
			labelCol={{
				span: 8,
			}}
			wrapperCol={{
				span: 16,
			}}
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			style={{
				width: '510px',
				height: '520px',
				background: 'white',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				margin: 'auto',
			}}
		>
			<Form.Item name='iconSibdev'>
				<img width={88} src='logoSibdev.png' alt='Sibdev logo' />
			</Form.Item>

			<Form.Item
				name='label'
				style={{
					width: '333px',
					marginLeft: 'auto',
					marginRight: 'auto',
					justifyContent: 'center',
				}}
			>
				<div style={{ textAlign: 'center' }}>Вход</div>
			</Form.Item>

			<Form.Item
				label='Username'
				name='username'
				style={{
					width: '333px',
					marginLeft: 'auto',
					marginRight: 'auto',
					justifyContent: 'center',
				}}
				rules={[
					{
						required: true,
						message: 'Please input your username!',
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Password'
				name='password'
				style={{
					width: '333px',
					marginLeft: 'auto',
					marginRight: 'auto',
					justifyContent: 'center',
				}}
				rules={[
					{
						required: true,
						message: 'Please input your password!',
					},
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item
				style={{
					width: '333px',
					marginLeft: 'auto',
					marginRight: 'auto',
					justifyContent: 'center',
				}}
				wrapperCol={{
					offset: 3,
					span: 16,
				}}
			>
				<Button
					type='primary'
					htmlType='submit'
					style={{
						width: '176px',
					}}
				>
					Войти
				</Button>
			</Form.Item>
			<div style={styleError}>
				Ошибка! Не корректно введены данные или такого пользователя нет
			</div>
		</Form>
	);
};

export default LoginForm;
