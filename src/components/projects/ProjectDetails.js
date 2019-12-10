import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-detail">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            A B Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur asperiores, architecto ducimus perspiciatis saepe illum, repellendus ab
            deleniti iste natus aliquid. Libero ullam velit sequi, cumque laborum ipsa veritatis minima!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>posted by the net ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
