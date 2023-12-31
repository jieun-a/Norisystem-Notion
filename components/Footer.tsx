import * as React from 'react'

// import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
// import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
// import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
// import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon'
// import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
// import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
// import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

import Icon from './Icon'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <>{config.author}</><br />
        <>수원사업장 : {config.addressSuwon} · TEL : {config.suwonTel}</><br />
        <>천안사업장 : {config.addressCheonan} · TEL : {config.cheonanTel}</>
      </div>

      <div className={styles.social}>

      </div>

      <div className={styles.settings}>
        {config.homepage && (
          <a
            className={styles.toggleDarkMode}
            href={`${config.homepage}`}
            title={`Norisystem Homepage`}
            target='_blank'
            rel='norisystem Corp.'
          >
            {isDarkMode ? <Icon size={32} color="rgba(255, 255, 255, 0.9)" /> : <Icon size={32} color="rgb(55, 53, 47)" />}
            {/* 새로고침 시 DarkMode 쪽 Icon 안 먹이는 문제 발생. 해결 요망 */}
          </a>
        )}

        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>



      {/* <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.mastodon && (
          <a
            className={styles.mastodon}
            href={config.mastodon}
            title={`Mastodon ${config.getMastodonHandle()}`}
            rel='me'
          >
            <FaMastodon />
          </a>
        )}

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaZhihu />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}

        {config.newsletter && (
          <a
            className={styles.newsletter}
            href={`${config.newsletter}`}
            title={`Newsletter ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelopeOpenText />
          </a>
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${config.youtube}`}
            title={`YouTube ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube />
          </a>
        )}
      </div> */}
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
