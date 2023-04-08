import * as React from "react";

const TableManagerBudget = (props) => {
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
              <td scope="col">Tên chi phí</td>
              <td scope="col">Đơn giá</td>
              <td scope="col">Số lượng</td>
              <td scope="col">Tổng tiền</td>
              <td scope="col">Ngày thêm</td>
            </tr>
            {props.list.map((item) => {
              return (
                <tr className="align-middle fw-semibold" key={item.id}>
                  <td className="text-nowrap" style={{ minWidth: 70 }}>
                    {item.id}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.name}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.price}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.amount}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.total}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    {item.dateAdd}
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

export default TableManagerBudget;
