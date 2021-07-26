import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Modal,
	Button,
	Form,
	Input,
	Select,
	Slider,
	InputNumber,
	Row,
	Col,
} from 'antd';
import { setVisibleModal } from '../../store/visibleModalSlice';

const { Option } = Select;

const ModalAddFavorite = () => {
	const visible = useSelector((state) => state.visibleModal.visible);
	const termSearchField = useSelector(
		(state) => state.termSearchField.termSearchField
	);
	const [loading, setLoading] = useState(false);
	const [sliderValue, setSliderValue] = useState(1);
	const [disabSubmBtn, setDisabSubmBtn] = useState(true);
	const [form] = Form.useForm();
	const dispatch = useDispatch();

	const handleOk = () => {
		setLoading(true);
		setTimeout(() => {
			dispatch(setVisibleModal(false));
			setLoading(false);
			form.resetFields();
		}, 2000);
	};

	const handleCancel = () => {
		dispatch(setVisibleModal(false));
	};

	const onFinishForm = (values) => {
		console.log('Success:', values);
	};

	const onFinishFormFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	const onChangeInputName = (obj) => {
		if (obj.target.value.trim()) setDisabSubmBtn(false);
		else setDisabSubmBtn(true);
	};

	const onChangeSlider = (value) => {
		setSliderValue(value);
	};

	return (
		<>
			<Modal
				title='Сохранить запрос'
				visible={visible}
				onCancel={handleCancel}
				footer={null}
				width={510}
			>
				<Form
					name='modalForm'
					form={form}
					onFinish={onFinishForm}
					onFinishFailed={onFinishFormFailed}
					initialValues={{
						['request']: termSearchField,
						['maxNumber']: 12,
					}}
				>
					<Form.Item label='Запрос' name='request'>
						<Input disabled={true} />
					</Form.Item>

					<Form.Item
						label='Название'
						name='name'
						onChange={onChangeInputName}
						rules={[
							{
								required: true,
								message: 'Please input the name of request!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item label='Сортировать по' name='sorting'>
						<Select
							showSearch
							placeholder='Без сортировки'
							optionFilterProp='children'
							filterOption={(input, option) =>
								option.toLowerCase().indexOf(input.toLowerCase()) >= 0
							}
						>
							<Option value='name'>Имени</Option>
							<Option value='viewing'>Просмотрам</Option>
							<Option value='timeAddition'>Времени добавления</Option>
						</Select>
					</Form.Item>

					<Form.Item label='Максимальное количество'>
						<Row>
							<Col span={12}>
								<Form.Item name='maxNumber'>
									<Slider
										min={1}
										max={50}
										onChange={onChangeSlider}
										value={typeof sliderValue === 'number' ? sliderValue : 0}
									/>
								</Form.Item>
							</Col>
							<Col span={4}>
								<Form.Item name='maxNumber'>
									<InputNumber
										min={1}
										max={50}
										style={{ margin: '0 16px' }}
										value={sliderValue}
										onChange={onChangeSlider}
									/>
								</Form.Item>
							</Col>
						</Row>
					</Form.Item>
					<Row>
						<Col span={10} offset={2}>
							<Button key='back' onClick={handleCancel}>
								Не сохранять
							</Button>
						</Col>
						<Col span={10} offset={2}>
							<Button
								key='submit'
								type='primary'
								loading={loading}
								onClick={handleOk}
								disabled={disabSubmBtn}
								htmlType='submit'
							>
								Сохранить
							</Button>
						</Col>
					</Row>
				</Form>
			</Modal>
		</>
	);
};

export default ModalAddFavorite;
