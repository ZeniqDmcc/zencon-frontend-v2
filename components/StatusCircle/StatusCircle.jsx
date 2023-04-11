import styles from "./status.module.css"

function StatusCircle() {
    return (
        <div classNameName="">
            <div className="container mx-auto">
                <div className={styles.box}>
                    <div className={styles.shadow}></div>
                    <div className={styles.content}>
                        <div className={styles.percent} data-text="HTML" style={{'--num': 85}}>
                            <div className={styles.dot}></div>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                        </div>
                        <div className={styles.number}>
                            <h2>85<span>%</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusCircle