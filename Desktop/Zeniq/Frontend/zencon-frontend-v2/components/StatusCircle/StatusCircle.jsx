import styles from "./status.module.css";
const passedStatues = ["InReview","Shortlisted","Selected"]
function StatusCircle({ status }) {
  return (
    <div className="">
      <div className="flex justify-between lg:max-w-[1100px] md:max-w-[780px] max-w-full lg:ml-[-130px] md:ml-[-100px] ml-[0px]">
        <div className={`${styles.item} ${status ==="Rejected" && styles.rejected} ${status!=="Rejected" && passedStatues.includes(status) && styles.completed}`}>
          <div className={styles.name}>
          <span className={`${status !== 'Rejected' && !passedStatues.includes(status) && 'text-[#87FF4F]'}`}>
            Application
            <br />
            Sent
            </span>
          </div>
          <div className={styles.counter}></div>
        </div>
        <div className={`${styles.item}  ${(status==="Selected" || status === "Shortlisted") && status !=="Rejected" ? styles.completed:null } ${status==="InReview" && styles.active}`}>
          <div className={styles.name}>
            {status==="Rejected"?<span className="text-[#FF6060]">Application<br/>Rejected</span>:<span className={`${status === 'InReview' && 'text-[#87FF4F]'}`}>Application
            <br />
          under review</span>}
          
          </div>
          <div className={`${status ==="Rejected"?styles.rejectedCounter:styles.counter}`}></div>
        </div>
        <div className={`${styles.item} ${status ==="Selected" ? styles.completed: null } ${status==="Shortlisted" && styles.active}`}>
          <div className={styles.name}>
          <span className={`${status === 'Shortlisted' && 'text-[#87FF4F]'}`}>
            You are
            <br />
            shortlisted
            </span>
          </div>
          <div className={styles.counter}></div>
        </div>
        <div className={`${styles.item} ${status==="Selected"? styles.active:null }`}>
          <div className={styles.name}>
            <span className={`${status === 'Selected' && 'text-[#87FF4F]'}`}>
            You are
            <br />
            selected
            </span>
          </div>
          <div className={styles.counter}></div>
        </div>
      </div>
    </div>
  );
}

export default StatusCircle;
