import styles from "../styles/components/Profile.module.css"

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src='https://github.com/Jailsom-Nogueira.png' alt='Avatar Jailsom Nogueira'/>
      <div>
        <strong>Jailsom Nogueira</strong>
        <p>
          <img src="icons/level.svg" alt="Icon Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}