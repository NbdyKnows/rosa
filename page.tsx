import RoseAnimation from "./RoseAnimation"
import Message from "./Message"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <RoseAnimation />
        <Message />
      </div>
    </main>
  )
}

