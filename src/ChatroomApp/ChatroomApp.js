import { Col, Row } from 'antd'
import React, { useContext } from 'react'
import { authProvider } from '../Context/AuthProvider'
import Chatroom from './Chatroom/Chatroom'
import Sidebar from './Sidebar/Sidebar'

export default function ChatroomApp() {
  return (
    <div>
      <Row>
        <Col span={6}>
          <Sidebar />
        </Col>
        <Col span={18}>
          <Chatroom />
        </Col>
      </Row>
    </div>
  )
}
