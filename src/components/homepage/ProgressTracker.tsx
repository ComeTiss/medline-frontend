import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
const useStyles = makeStyles( {
    progressTracker: {
        display: "flex",
        flexDirection: "column",
        padding: "100px",

    },
    stepLevel: {
        display: "flex",
    },
    step: {
        width: "500px",
        textAlign: "center"
    },
} )
type TypographyProp = {
    children: string,
    style?: any,
}

const ProgressTracker = () => {
    const styles = useStyles();
    const TypographyHeaderConfig = ( props: TypographyProp ) =>
        <Typography
            variant="body2"
            component="h1"
            color="primary"
            align="center"
            style={{
                fontWeight: "bold",
            }}
        >{props.children}</Typography>

    const TypographyBodyConfig = ( props: TypographyProp ) =>
        <Typography
            variant="body2"
            component="p"
            color="textSecondary"
            align="center"
        > {props.children}</Typography >

    const TypographyStepNumberConfig = ( props: TypographyProp ) =>
        <Typography
            variant="body2"
            component="p"
            color="primary"
            align="center"
            style={{
                // width: "46px",
                borderRadius: "50%",
                background: "none",
                border: "solid 3px black",
                padding: "0.6em",
                fontWeight: "bold",
            }}
        >
            {props.children}
        </Typography>

    return (
        <div className={styles.progressTracker}>
            <div className={styles.stepLevel}>
                <div className={styles.step}>
                    <TypographyHeaderConfig>
                        REQUEST YOUR NEEDS
                    </TypographyHeaderConfig>
                    <TypographyBodyConfig>
                        Listing medical supply needs of medical personnel and organisations, helping to highlight and prioritise the most urgent
                        requests -bringing awareness and support to the very front-lines, where relief is needed the most.
                    </TypographyBodyConfig>
                </div>
                <div className={styles.step}>
                    <TypographyStepNumberConfig>
                        1
                     </TypographyStepNumberConfig>
                </div>
                <div className={styles.step}></div>
            </div>
            <div className={styles.stepLevel}>
                <div className={styles.step}></div>
                <div className={styles.step}>
                    <TypographyStepNumberConfig>
                        2
                     </TypographyStepNumberConfig>
                </div>
                <div className={styles.step}>
                    <TypographyHeaderConfig>
                        FIND SUPPLIERS THAT FIT
                    </TypographyHeaderConfig>
                    <TypographyBodyConfig>
                        Onbording suppliers to meet requests while implementing verifications to help ensure standards and requirements are met, working to
                        eliminate black market and sub-standard protection that may put lives at risk.
                    </TypographyBodyConfig>
                </div>
            </div>
            <div className={styles.stepLevel}>
                <div className={styles.step}>
                    <TypographyHeaderConfig>
                        CONNECT FAST AND DIRECT
                    </TypographyHeaderConfig>
                    <TypographyBodyConfig>
                        Enabling 'Needs & Leads' to get essentials supplies moving- maximising speed efficiency and effectiveness to amplify limited supplies
                        manpower and budget resources.
                </TypographyBodyConfig>
                </div>
                <div className={styles.step}>
                    <TypographyStepNumberConfig>
                        1
                    </TypographyStepNumberConfig>
                </div>
                <div className={styles.step}></div>
            </div>
        </div>
    )
}

export default ProgressTracker;