import type React from "react"
import styles from "./RoseAnimation.module.css"

const RoseAnimation: React.FC = () => {
  return (
    <div className={styles.animationContainer}>
      <div className={styles.glass}>
        <div className={styles.shine}></div>
      </div>
      <div className={styles.thorns}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.leaves}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.petals}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.deadPetals}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default RoseAnimation

