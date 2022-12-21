import { useNavigate } from "react-router-dom"
import { auth } from '../firebase/firebase'
import { createContext, useEffect, useState } from "react"
import { Spin } from "antd"




export const authProvider = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        const unsubrise = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, email, uid, photoURL } = user
                setUser({ displayName, email, uid, photoURL })
                setIsLoading(false)
                navigate('/')
            } else {
                setIsLoading(false)
                navigate('/login')
            }
        })
        return () => {
            unsubrise()
        }
    }, [navigate])
    return (
        <authProvider.Provider value={user}>
            {isLoading ? <Spin /> : children}
        </authProvider.Provider>
    )
}

