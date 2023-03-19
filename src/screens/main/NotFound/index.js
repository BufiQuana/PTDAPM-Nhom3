import * as React from "react";
import Template from "../../../components/Template";
import { ASSETS } from "../../../constants/ASSETS";

const NotFound = () => {
  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="d-flex flex-column flex-xl-row align-items-center justify-content-center bg-white">
          <img src={ASSETS.notFoundImage} alt="" className="img-fluid" />
          <div className="">
            <p className="h3 fw-bold my-2 my-xl-0 ps-4 ps-xl-0">404</p>
            <p className="h3 fw-bold my-2 my-xl-0 ps-4 ps-xl-0">NOT FOUND</p>
            <p className="my-2 my-xl-0 ps-4 ps-xl-0">
              Uh oh, something looks wrong here.
            </p>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default NotFound;
