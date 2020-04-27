import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import findImage from '../../images/homepage-find.png'
import handsImage from '../../images/homepage-hands-and-gestures.png'
import helpImage from '../../images/homepage-help.png'

const useStyles = makeStyles( {
    progressTracker: {
        display: "flex",
        flexDirection: "column",
        margin: "100px",

    },
    stepLevel: {
        display: "flex",
        padding: "0 50px 0 50px"
    },
    step: {
        position: "relative",
        width: "500px",
        textAlign: "center",
    },
    stepImage: {
        width: "50px",
        height: "50px",
    },
    verticalBarRel: {
        position: "relative",
        background: "linear-gradient(#233768, #233768 ) no-repeat center/2px 100%",
        height: "100%",
        transform: "translateY(16%)"
    }
} )
type TypographyProp = {
    children: string,
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
            component="h1"
            color="primary"
            align="center"
            style={{
                fontWeight: "bold",
                borderRadius: "50%",
                background: "none",
                border: "solid 2px #233768",
                padding: "0.4em 0.7em",
                display: "inline",
            }}
        >
            {props.children}
        </Typography>

    return (
        <div className={styles.progressTracker}>

            <div className={styles.stepLevel}>
                <div className={styles.step}>
                    <img src={helpImage} className={styles.stepImage} />
                    <TypographyHeaderConfig>
                        REQUEST YOUR NEEDS
                    </TypographyHeaderConfig>
                    <TypographyBodyConfig>
                        Listing medical supply needs of medical personnel and organisations, helping to highlight and prioritise the most urgent
                        requests -bringing awareness and support to the very front-lines, where relief is needed the most.
                    </TypographyBodyConfig>
                </div>
                <div className={styles.step}
                    style={{
                        marginTop: "50px",
                        paddingTop: "0.6em",
                    }}>
                    <TypographyStepNumberConfig>
                        1
                     </TypographyStepNumberConfig>
                    <div className={styles.verticalBarRel}></div>

                </div>
                <div className={styles.step}></div>
            </div>
            <div className={styles.stepLevel}>
                <div className={styles.step}></div>
                <div className={styles.step}
                    style={{
                        marginTop: "50px",
                        paddingTop: "0.6em",
                    }}>
                    <TypographyStepNumberConfig>
                        2
                     </TypographyStepNumberConfig>
                    <div className={styles.verticalBarRel}></div>

                </div>
                <div className={styles.step}>
                    <img src={findImage} className={styles.stepImage} />

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
                    <img src={handsImage} className={styles.stepImage} />

                    <TypographyHeaderConfig>
                        CONNECT FAST AND DIRECT
                    </TypographyHeaderConfig>
                    <TypographyBodyConfig>
                        Enabling 'Needs & Leads' to get essentials supplies moving- maximising speed efficiency and effectiveness to amplify limited supplies
                        manpower and budget resources.
                </TypographyBodyConfig>
                </div>
                <div className={styles.step}
                    style={{
                        marginTop: "50px",
                        paddingTop: "0.6em"
                    }}
                >
                    <TypographyStepNumberConfig>
                        3
                    </TypographyStepNumberConfig>
                </div>
                <div className={styles.step}></div>
            </div>
        </div >
    )
}

export default ProgressTracker;