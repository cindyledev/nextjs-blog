import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/alert.module.css'
import cn from 'classnames'

export default function FirstPost({ children, type}) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <div className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}>
        {children}
      </div>
    </Layout>
  )
}