import { Col, Row } from 'antd'
import React from 'react'
import DataUser from './DataUser'
import RoomList from './RoomList'
import styled from 'styled-components'


export default function Chatroom() {
  const SidebarStyled = styled.div`
    background: #3f0e40;
    color: white;
    height: 100vh;
 
 `
  return (
    <div>
      <SidebarStyled>
        <Row>
          <Col span={24}>
            <DataUser />
          </Col>
          <Col span={24}>
            <RoomList />
          </Col>
        </Row>
      </SidebarStyled>
    </div>
  )
}

