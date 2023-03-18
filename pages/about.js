import styles from '../styles/About.module.css'

const About = () => {

    return (
        <div className={styles.cont}>
            <div className={styles.holograph}>
                <div className={styles.art}></div>
                <div className={styles.holo}></div>
            </div>

            <div className={styles.info}>
                <h1>A Bit About Me</h1>
                <div>
                    <div className={styles.l_card}>
                        <h3>Career History</h3>
                        <p>Career-shifter ex Medical Laboratory Scientist</p>
                        <h3>Interests</h3>
                        <p>Gadgets/Techs<br></br>Self-Improvement<br></br>(Street) Food</p>
                        <h3>Hobbies</h3>
                        <p>Films/Movies<br></br>Crafts/Arts</p>
                    </div>
                    <div className={styles.r_card}>
                        <h4>&quot;A self-taught developer who enjoys a sense of dopamine on the magic of programming
                            and believed to be the fated Techfairy&quot;.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;