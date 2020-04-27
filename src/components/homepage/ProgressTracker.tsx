import React from 'react'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles( {
    progressTracker: {
        display: "flex",
        flexDirection: "column",
    },
    stepLevel: {
        display: "flex",
    },
    step: {
        width: "500px"
    },
} )
const ProgressTracker = () => {
    const styles = useStyles();
    return (
        <div className={styles.progressTracker}>
            <div className={styles.stepLevel}>
                <div className={styles.step}></div>
                <div className={styles.step}></div>
                <div className={styles.step}></div>
            </div>
            <div className={styles.stepLevel}>
                <div className={styles.step}></div>
                <div className={styles.step}></div>
                <div className={styles.step}></div>
            </div>
            <div className={styles.stepLevel}>
                <div className={styles.step}></div>
                <div className={styles.step}></div>
                <div className={styles.step}></div>
            </div>
        </div>
    )
}

export default ProgressTracker;