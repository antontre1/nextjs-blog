import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default Layout
