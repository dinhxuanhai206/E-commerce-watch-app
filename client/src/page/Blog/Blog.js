import React from 'react'
import classNames from 'classnames/bind'
import styles from './Blog.module.scss'

const cx = classNames.bind(styles)

const Blog = () => {
    return (
        <div className={cx('wrapper')}>
            Blog
        </div>
    )
}
export default Blog;