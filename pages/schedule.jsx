import Navbar from "../components/Navbar/Navbar";

export default function Schedule() {
    return (
        <div className="">
        <Navbar />
        <div className="container mx-auto timeline">
          <div className="timeline-container bg-primary">
            <div className="timeline-icon">
              <i className="far fa-grin-wink"></i>
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Primary</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam necessitatibus numquam earum ipsa fugiat veniam
                suscipit, officiis repudiandae, eum recusandae neque
                dignissimos. Cum fugit laboriosam culpa, repellendus esse
                commodi deserunt.
              </p>
              <p className="timeline-subtitle">1 Hours Ago</p>
            </div>
          </div>

          <div className="timeline-container bg-danger">
            <div className="timeline-icon">
              <i className="far fa-grin-hearts"></i>
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Danger</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam necessitatibus numquam earum ipsa fugiat veniam
                suscipit, officiis repudiandae, eum recusandae neque
                dignissimos. Cum fugit laboriosam culpa, repellendus esse
                commodi deserunt.
              </p>
              <p className="timeline-subtitle">2 Hours Ago</p>
            </div>
          </div>

          <div className="timeline-container bg-success">
            <div className="timeline-icon">
              <i className="far fa-grin-tears"></i>
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Success</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam necessitatibus numquam earum ipsa fugiat veniam
                suscipit, officiis repudiandae, eum recusandae neque
                dignissimos. Cum fugit laboriosam culpa, repellendus esse
                commodi deserunt.
              </p>
              <p className="timeline-subtitle">6 Hours Ago</p>
            </div>
          </div>
        </div>
        </div>
    )
}