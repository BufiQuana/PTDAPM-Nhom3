import * as React from "react";

const TableManagerReport = (props) => {
  return (
    <>
      <div className="w-100 overflow-scroll">
        <table
          className="table flex-fill color-5D6679 border-top"
          style={{ minWidth: 600 }}
        >
          <thead></thead>
          <tbody>
            <tr className="align-middle">
              <td scope="col">ID</td>
              <td scope="col">Công việc</td>
              <td scope="col">Người thực hiện</td>
              <td scope="col">Người giao việc</td>
              <td scope="col">Ngày giao việc</td>
              <td scope="col">Ngày hết hạn</td>
              <td scope="col">Tỷ lệ hoàn thành</td>
              <td scope="col">Trạng thái</td>
              <td scope="col">Tiến độ</td>
            </tr>
            {props.list.map((item) => {
              return (
                <tr className="align-middle fw-semibold" key={item.id}>
                  <td className="text-nowrap" style={{ minWidth: 70 }}>
                    {item.id}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.task}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.member}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.manager}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.dateStart}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.dateEnd}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.completion}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.state}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.progress}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex align-items-center justify-content-between text-secondary">
        <div className="btn border text-secondary">Previous</div>
        <small>Page 1 of 10</small>
        <div className="btn border text-secondary">Next</div>
      </div>
    </>
  );
};

export default TableManagerReport;
