import React from 'react'
import classNames from 'classnames/bind'
import styles from './MyAccount.module.scss'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)

const MyAccount = () => {
    const userInfo = useSelector((state)=>state.user.userInfo)
    return (
        <div className={cx('myaccount')}>
            <div className={cx("username")}> <span>Username:</span> {userInfo.username}</div>
            <div className={cx("email")}><span>Email: </span>{userInfo.email}</div>
        </div>
    )
}
export default MyAccount;