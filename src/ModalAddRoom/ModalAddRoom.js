import { Form, Input, Modal } from 'antd'
import React, { useContext } from 'react'
import { authProvider } from '../Context/AuthProvider'
import { RoomsProvider } from '../Context/AuthRoomdProvider'
import { addDocuments } from '../firebase/service'

export default function ModalAddRoom() {
    const user = useContext(authProvider)
    const { isAddRoomVisisble, setIsAddRoomVisible } = useContext(RoomsProvider)
    const [form] = Form.useForm()
    const handleOk = async () => {
        addDocuments('rooms', ({ ...form.getFieldsValue(), members: [user.uid] }))
        form.resetFields()
        setIsAddRoomVisible(false)
    }
    const handleCancle = () => {
        form.resetFields()
        setIsAddRoomVisible((false))
    }
    return (
        <Modal
            title='Tạo phòng'
            onOk={handleOk}
            open={isAddRoomVisisble}
            onCancel={handleCancle}
            getContainer={false}
        >
            <Form
                form={form}
                layout='vertical'

            >
                <Form.Item
                    name="name"
                    label='Tên phòng'
                >
                    <Input placeholder='Nhập tên phòng' />
                </Form.Item>
                <Form.Item
                    name="discriptions"
                    label='Mô tả'
                >
                    <Input.TextArea placeholder='Nhập mô tả' />
                </Form.Item>
            </Form>
        </Modal>
    )
}
