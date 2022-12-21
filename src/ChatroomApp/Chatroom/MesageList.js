import { Avatar, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

export default function MesageList({ photoURL, displayName, text, createAt }) {
    const MessageStyleList = styled.div`
        margin-bottom: 10px;
        .name {
            margin-left : 5px;
            font-weight: bold;
        }
        .time {
            margin-left: 10px;
            font-size: 11px;
            color: #a7a7a7
        }
        .content {
            margin-left: 30px;
        }
    `
    return (
        <div>
            <MessageStyleList>
                <div>
                    <Avatar size={'small'} src={photoURL}>A</Avatar>
                    <Typography.Text className='name'>{displayName}</Typography.Text>
                    <Typography.Text className='time'>{createAt}</Typography.Text>
                </div>
                <div>
                    <Typography.Text className='content'>{text}</Typography.Text>
                </div>
            </MessageStyleList>
        </div>
    )
}
