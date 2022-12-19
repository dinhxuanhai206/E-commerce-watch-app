import { useRef, useCallback, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './ToggleLanguage.module.scss'
import flagVietnam from '../../assets/images/vn.png'
import flagEnglish from '../../assets/images/au.png'
import i18n from 'i18next'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

const cx = classNames.bind(styles)

function ToggleLanguage() {
	const [toggle, setToggle] = useState("");

	const { i18n } = useTranslation()

	const handleClick = () => {
		if (toggle === "vn") {
			i18n.changeLanguage('en')
			setToggle("en")
		} else {
			i18n.changeLanguage('vn')
			setToggle("vn")
		}
	}

	return (
		<label className={cx('toggle-language', toggle)}>
			<button onClick={handleClick} className={cx('btn-change')}>
				<img src={toggle === "vn" ? flagVietnam : flagEnglish} alt="..."  className={cx('img')}/>
			</button>
		</label>
	)
}

export default ToggleLanguage
