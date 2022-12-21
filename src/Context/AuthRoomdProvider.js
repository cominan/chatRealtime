import { createContext, useContext, useMemo, useState, useTransition } from "react"
import useFireStore from "../hook/useFireStore"
import { authProvider } from "./AuthProvider"


export const RoomsProvider = createContext()
export default function AuthRoomsProvider({ children }) {
    const [isAddRoomVisisble, setIsAddRoomVisible] = useState(false)
    const [isInviteUser,setIsInviteUser] = useState(false)
    const [isRoomId, setIsRoomId] = useState('')
    const roomList = useContext(authProvider)


    //Lọc phòng trong sidedbar
    // Lọc member trong roomlist
    const roomsCondition = useMemo(() => {
        return ({
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: roomList.uid
        })
    }, [roomList.uid])

    const rooms = useFireStore('rooms', roomsCondition)


    const selectRoomId = useMemo (() => {
        return rooms.find(room  => room.id === isRoomId ) ||{}
    },[isRoomId])



    // Lọc member trong roomlist
    const userCondition = useMemo(() => {
        return ({
            fieldName: 'uid',
            operator: 'in',
            compareValue: selectRoomId.members
        })
    }, [selectRoomId.members])
    const usersRoomList = useFireStore('users', userCondition)

    return (
        <RoomsProvider.Provider value={{
            rooms, isRoomId, setIsRoomId, isAddRoomVisisble, setIsAddRoomVisible
            , selectRoomId, usersRoomList , isInviteUser, setIsInviteUser
        }}>
            {children}
        </RoomsProvider.Provider>
    )
}




