import { Avatar, Form, Modal, Select, Skeleton, Spin } from 'antd'
import React, { useContext, useMemo, useState } from 'react'
import { RoomsProvider } from '../Context/AuthRoomdProvider'
import { debounce } from 'lodash'
import { addDocuments } from '../firebase/service'
import { db } from '../firebase/firebase'


const { Option } = Select

function DebounceSelect({ fetchOptions, debounceTimeOut = 300, ...props }) {
    const [fetching, setFeching] = useState(false)
    const [option, setOption] = useState([])
    
    const debounceFetcher = useMemo(() => {
        const loadOptions = value => {
            setOption([])
            setFeching(true)
            fetchOptions(value).then(newOption => {
                setOption(newOption)
                setFeching(false)
            })
            return debounce(loadOptions, debounceTimeOut)
        }
    }, [fetchOptions, debounceTimeOut])


    console.log(option);
    return (
        <Select
            labelInValue
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size='small' /> : null}
            mode='multiple'
            style={{ width: '100%' }}
            filterOption = {false}
            {...props}
        >
            {option.map(opt => (
                <Option key={opt.value} value={opt.value}>
                    <Avatar src={opt.photoURL} size='small'>
                        {opt.photoURL ? '' : opt.label?.charAt(0)?.toUpperCase()}
                    </Avatar>
                    {`${opt.label}`}
                </Option>
            ))}
        </Select>
    )
}



async function fetchUserlist(search) {
    return db.collection('user').where('keywords', 'array-contains', search).orderBy('displayName').limit(20).get().then(
        (snapshot) => {
            return snapshot.docs.map(doc => ({
                label: doc.data().displayName,
                photoURL: doc.data().photoURL,
                value: doc.data().uid
            }))
        }
    )
}


export default function ModalInviteUser() {
    const { isInviteUser, setIsInviteUser } = useContext(RoomsProvider)
    const [value, setValue] = useState([])
    const handleOk = () => {

        setIsInviteUser(false)
    }
    const handleCancle = () => {


        setIsInviteUser(false)
    }
    const [form] = Form.useForm()


    return (
        <Modal
            title='Nhập tên thành viên'
            onOk={handleOk}
            open={isInviteUser}
            onCancel={handleCancle}
            getContainer={false}
        >
            <Form form={form} layout='vertical'>
                <DebounceSelect
                    label='tên các thành viên'
                    value={value}
                    placeholder='Nhập tên thành viên'
                    fetchOptions={fetchUserlist}
                    onChange={newValue => setValue(newValue)}
                />
            </Form>
        </Modal>
    )
}
