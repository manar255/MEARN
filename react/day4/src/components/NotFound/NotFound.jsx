import React from "react";
import errorImage from "../../assets/404 Error Page not Found with people connecting a plug-amico.png";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="row  col-6 d-flex flex-column justify-content-center">
          <img
            src={errorImage}
            alt="404 Error Page not Found"
            className="img-fluid"
          />
          
          
        </div>
      </div>
    </>
  );
};

export default NotFound;
