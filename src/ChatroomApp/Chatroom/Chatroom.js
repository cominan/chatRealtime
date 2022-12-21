import { UserOutlined } from '@ant-design/icons'
import { Alert, Avatar, Button, Form, Input, Tooltip, Typography } from 'antd'
import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { RoomsProvider } from '../../Context/AuthRoomdProvider'
import MesageList from './MesageList'


export default function Chatroom() {
  const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    padding: 0 16px;
    align-items:center;
    border-bottom: 1px solid rgb(230, 230, 230);

    .header {
      &__info {
        display: flex;
        flex-direction: column;
        justify-content: center
      }
      &__title {
        margin: 0;
        font-weight: bold;
      }
      &__discription {
        font-size: 12px;
      }
    }
  `
  const ButtonGroupStyled = styled.div`
    display: flex;
    align-items: center;
  
  `
  const WrapperStyled = styled.div`
  height: 100vh;
  
  `
  const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
    
  .ant-form-item {
    flex: 1;
    margin-bottom: 0
  }
  `
  const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230)
  border-radius: 2px;
  `
  const MessageStyledList = styled.div`
  max-heigth: 100%;
  overflow-y: auto;
  `
  const { selectRoomId, usersRoomList } = useContext(RoomsProvider)
  const {setIsInviteUser} = useContext(RoomsProvider)
  return (
    <WrapperStyled>
      {selectRoomId.name ? <>
        <HeaderStyled>
          <div className='header__info'>
            <p className='header__title'>{selectRoomId ? selectRoomId.name : ''}</p>
            <span className='header__description'>{selectRoomId ? selectRoomId.discriptions : ''}</span>
          </div>
          <ButtonGroupStyled style={{ cursor: 'pointer' }}>
            <Button onClick={() => setIsInviteUser(true)} icon={<UserOutlined />} type='text'>Mời</Button>
            <Avatar.Group size={'small'} maxCount={'2'}>
              {usersRoomList.map(member => {
                return (
                  <Tooltip key={member.id} title={member.displayName}>
                    <Avatar src={member.photoURL}>
                      {member.photoURL ? member.photoURL : member.displayName?.chartAt(0)?.toUpperCase()}
                    </Avatar>
                  </Tooltip>
                )
              })}
            </Avatar.Group>
          </ButtonGroupStyled>
        </HeaderStyled>
        <ContentStyled>
          <MessageStyledList >
            <MesageList text={'hello anh em'} displayName={'Trần'} createAt={1223} photoURL={null} />
            <MesageList text={'hello anh em'} displayName={'Trần'} createAt={1223} photoURL={null} />
            <MesageList text={'hello anh em'} displayName={'Trần'} createAt={1223} photoURL={null} />
            <MesageList text={'hello anh em'} displayName={'Trần'} createAt={1223} photoURL={null} />
            <MesageList text={'hello anh em'} displayName={'Trần'} createAt={1223} photoURL={null} />
          </MessageStyledList>
          <FormStyled>
            <Form.Item>
              <Input bordered={false} autoComplete='off' placeholder='Nhập tin nhắn...' className='input' />
            </Form.Item>
            <Button type='primary'>Gửi</Button>
          </FormStyled>
        </ContentStyled>

      </> : <Alert type='info' message='Hãy chọn phòng' closable />}
    </WrapperStyled>
  )
}
