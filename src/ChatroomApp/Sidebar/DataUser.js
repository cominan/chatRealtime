import { Avatar, Button, Typography } from 'antd'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { authProvider } from '../../Context/AuthProvider'
import styled from 'styled-components'


export default function DataUser() {
    const avatar = useContext(authProvider)
    const navigate = useNavigate()
    const auth = getAuth()
    const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding:5px;
    border-bottom:1px solid rgbs(82, 82, 83)
 `
    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/login')
        })
    }
    return (
        <div>
            <Wrapper>
                <div>
                    <Avatar style={{marginRight:'4px'}} src={avatar.photoURL}>{avatar.photoURL ? '' : avatar.displayName?.charAt(0).toUpperCase()}</Avatar>
                    <Typography.Text style={{color:'white'}}>{avatar.displayName}</Typography.Text>
                </div>
                <Button style={{color:'white'}} ghost onClick={handleLogout}>Đăng xuất</Button>
            </Wrapper>

        </div>
    )
}
