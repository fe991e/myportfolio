import styles from '../styles/Techs.module.css'

const Techs = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.card_scroll}>
                <div className={styles.card_cont}>
                    <h2>Technology</h2>
                    <hr></hr>
                    <div className={styles.card} id="lang">
                        <h3>Languages</h3>
                        <p>HTML&#10049;CSS&#10049;JS</p><progress className={styles.prog_c}></progress>
                        <p>JAVA</p><progress className={styles.prog_b}></progress>
                        <p>C#</p><progress className={styles.prog_a}></progress>
                        <p>MySQL</p><progress className={styles.prog_b}></progress>
                        <p>VBA</p><progress className={styles.prog_c}></progress>
                    </div>
                    <hr></hr>
                    <div className={styles.card} id="fwork">
                        <h3>Frameworks</h3>
                        <p>NodeJS</p><progress className={styles.prog_b}></progress>
                        <p>REACT</p><progress className={styles.prog_a}></progress>
                        <p>NextJS</p><progress className={styles.prog_a}></progress>
                        <p>WPF .Net</p><progress className={styles.prog_a}></progress>
                    </div>
                    <hr></hr>
                    <div className={styles.card} id="tool">
                        <h3>General Softwares</h3>
                        <p>Adobe AI, PS</p><progress className={styles.prog_b}></progress>
                        <p>MS Office</p><progress className={styles.prog_c}></progress>
                    </div>
                </div>
            </div>
            <div className={styles.leg_cont}>
                {/* <a href='#'>&#10050;</a>
                <a href='#'>&#10049;</a>
                <a href='#'>&#10051;</a> */}
                <progress data-label="Advanced Beginner" max="100"></progress>
                <progress data-label="Compentent" max="100"></progress>
                <progress data-label="Proficient" max="100"></progress>
            </div>
        </div>
    );
}

export default Techs;