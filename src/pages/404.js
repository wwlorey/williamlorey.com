import React from "react"
import { Link } from "gatsby"
import Emoji from "../components/emoji"
import styles from "./404.module.css"

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.secondaryContainer}>
        <h1 className={styles.header}>Oops! Something went wrong...</h1>
        <Link className={styles.button} to='/'>
          Back to Safety <Emoji description="construction worker dude" emoji="👷" />
        </Link>
      </div>
    </div>
  );
}
