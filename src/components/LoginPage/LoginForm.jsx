import React from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm = () => {
	const [form] = Form.useForm();
	const onFinish = (values) => {
		console.log('Success:', values);
		form.resetFields();
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
		</Form>
	);
};

export default LoginForm;
