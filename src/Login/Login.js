import React from 'react'
import { Row, Col, Typography, Button } from 'antd'
import firebase from 'firebase/compat/app'
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { addDocuments, generateKeywords } from '../firebase/service'


const { Title } = Typography

export default function Login() {

    const handleLogin = async () => {
        const { additionalUserInfo, user } = await firebase.auth().signInWithPopup(new FacebookAuthProvider())
        if (additionalUserInfo?.isNewUser) {
            addDocuments('users', {
                displayName: user.displayName,
                photoURL: user.photoURL,
                uid: user.uid,
                email: user.email,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName)
            })
        }
    }
    const handleGoogle = () => {
        firebase.auth().signInWithPopup(new GoogleAuthProvider())
    }


    return (
        <div>
            <Row style={{ height: 800 }} justify='center'>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }} level={3}>Fun Chat</Title>
                    <Button onClick={handleGoogle} style={{ width: '100%', marginBottom: 5 }}>Đăng nhâp bằng Google</Button>
                    <Button onClick={handleLogin} style={{ width: '100%', marginBottom: 5 }}>Đăng nhâp bằng Facebook</Button>
                </Col>
            </Row>
        </div>
    )
}
