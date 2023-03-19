import * as React from "react";
import DetailAdjustments from "../../../components/Detail/DetailAdjustments";
import DetailOverview from "../../../components/Detail/DetailOverview";
import DetailPurchase from "../../../components/Detail/DetailPurchase";
import DetailHistory from "../../../components/Detail/DetailHistory";
import Template from "../../../components/Template";
import "./style.css";

const ProjectDetail = () => {
  const listContentDetail = [
    {
      title: "Overview",
      component: <DetailOverview />,
    },
    {
      title: "Purchases",
      component: <DetailPurchase />,
    },
    {
      title: "Adjustments",
      component: <DetailAdjustments />,
    },
    {
      title: "History",
      component: <DetailHistory />,
    },
  ];

  const [currentContent, setCurrentContent] = React.useState({
    title: "Overview",
    component: <DetailOverview />,
  });

  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="bg-light rounded-3 p-3">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <p className="fw-semibold mb-4 text-nowrap">Maggi</p>
            <div className="w-100 row justify-content-end">
              <div className="mb-4 col-6 col-lg-3 col-xl-2">
                <div className="btn d-flex align-items-center justify-content-center border">
                  <i className="fa fa-pen"></i>
                  <p className="ps-2">Edit</p>
                </div>
              </div>
              <div className="mb-4 col-6 col-lg-3 col-xl-2 text-nowrap">
                <div className="btn d-flex align-items-center justify-content-center border">
                  Download
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            {listContentDetail.map((item, i) => {
              return (
                <div
                  onClick={() => setCurrentContent(item)}
                  key={i}
                  className={`px-4 pb-2 border-bottom  ${
                    currentContent.title === item.title &&
                    "border-2 border-primary"
                  }`}
                >
                  {item.title}
                </div>
              );
            })}
            <div className="flex-fill border-bottom"></div>
          </div>
          {currentContent.component}
        </div>
      </div>
    </Template>
  );
};

export default ProjectDetail;
