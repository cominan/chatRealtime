import { Button, Collapse, Typography } from 'antd'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { PlusSquareOutlined } from '@ant-design/icons'
import { RoomsProvider } from '../../Context/AuthRoomdProvider'



const { Panel } = Collapse
export default function RoomList() {
    const PanelStyled = styled(Panel)`
        &&& {
            .ant-collapse-header, p {
                color:white
            }
            .ant-collapse-content-box {
                padding:0 40px
            }
            .add-room {
                color:white;
                padding: 4px 0
            }
        }
    `
    const LinkStyled = styled(Typography.Link)`
        display:block;
        margin-bottom: 6px
    `
    const { rooms, setIsAddRoomVisible, setIsRoomId } = useContext(RoomsProvider)
    const handleAddRoom = () => {
        setIsAddRoomVisible(true)
    }
    return (
        <div>
            <Collapse ghost defaultActiveKey={['1']}>
                <PanelStyled header={'Danh sach cac phong'} key={'1'}>
                    {rooms.map((room) => {
                        return <LinkStyled key={room.uid} onClick={() => setIsRoomId(room.id)}>{room.name}</LinkStyled>
                    })}
                    <Button className='add-room' type='text' onClick={() => handleAddRoom()} icon={<PlusSquareOutlined />}>Thêm phòng mới</Button>
                </PanelStyled>
            </Collapse>
        </div>
    )
}
