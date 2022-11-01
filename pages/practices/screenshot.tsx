import styles from "../../styles/Screenshot.module.css"

const Screenshot = () => {

    return (
        <>
            <div className={styles.container}>
                <h1>Screenshot</h1>

                <h3>Scroll down ↓</h3>

                {/* extra space */}
                <div className={styles.extraSpace}></div>

                <div className={styles.screenshotArea}>
                    <h2>Take a screenshot of this area!</h2>
                </div>

            </div>
        </>
    );

}

export default Screenshot;