import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './ScrollToTop.module.scss'
import { ImArrowUp2 } from 'react-icons/im'

const cx = classNames.bind(styles)

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 250) {
				setVisible(true)
			} else {
				setVisible(false)
			}
		})
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // for smoothly scrolling
		})
	}

	return (
		<button onClick={scrollToTop} className={cx('back-to-top', { 'show': visible })}>
			<ImArrowUp2 />
		</button>
	)
}
export default ScrollToTop
