import * as React from "react";
import NotificationComponent from "../../NotificationComponent";
import HR from "../../HR";

const SettingNotification = () => {
  const listNotificationUp = [
    {
      title: "Tin tức và cập nhật",
      content: "Tin tức về sản phẩm và cập nhật tính năng.",
      checked: true,
    },
    {
      title: "Mẹo và hướng dẫn",
      content: "Để nhận được nhiều hướng dẫn hơn khi dùng.",
      checked: true,
    },
    {
      title: "Nghiên cứu người dùng",
      content:
        "Tham gia vào chương trình thử nghiệm beta của chúng tôi hoặc tham gia nghiên cứu người dùng sản phẩm trả phí.",
      checked: true,
    },
    {
      title: "Bình luận",
      content:
        "Bình luận vào trong bài đăng của bạn và câu trả lời của bình luận.",
      checked: false,
    },
    {
      title: "Lời nhắc nhở",
      content:
        "Đây là thông báo để nhắc nhở bạn về những cập nhật bạn có thể bỏ lỡ.",
      checked: false,
    },
  ];

  const listNotificationDown = [
    {
      title: "Bình luận",
      content:
        "Bình luận vào trong bài đăng của bạn và câu trả lời của bình luận.",
      checked: true,
    },
    {
      title: "Lời nhắc nhở",
      content:
        "Đây là thông báo để nhắc nhở bạn về những cập nhật bạn có thể bỏ lỡ.",
      checked: true,
    },
    {
      title: "Nhiều hoạt động về bạn",
      content:
        "Đây là thông báo cho bài đăng của bạn trên trang cá nhân, lượt thích và các tương tác khác cho bài đăng, và hơn thế nữa.",
      checked: false,
    },
  ];

  return (
    <div className="bg-white p-3 rounded-3 h-100 row">
      <div className="col-5">
        <p className="fw-bold">Thông báo email</p>
        <p className="text-muted">
          Nhận email để biết những chuyện đang xảy ra khi bạn không online. Bạn
          có thể tắt thông báo email.
        </p>
      </div>
      <div className="col-7">
        {listNotificationUp.map((item) => {
          return (
            <NotificationComponent
              key={item.title}
              title={item.title}
              content={item.content}
              checked={item.checked}
            />
          );
        })}
      </div>

      <HR height={1} className={"mb-3 bg-secondary"} />

      <div className="col-5">
        <p className="fw-bold">Hiện thị thông báo</p>
        <p className="text-muted">
          Nhận thông báo ở trong phần mềm để biết những chuyện đang xảy ra khi
          bạn đang online.
        </p>
      </div>
      <div className="col-7">
        {listNotificationDown.map((item) => {
          return (
            <NotificationComponent
              key={item.title}
              title={item.title}
              content={item.content}
              checked={item.checked}
            />
          );
        })}
      </div>
      <div className="border p-3 d-flex align-items-start rounded-3">
        <i className="fa fa-bars mt-1 me-2"></i>
        <div className="">
          <p className="fw-bold">Bộ lọc nâng cao</p>
          <p className="text-muted">
            Tinh chỉnh thông báo như những gì bạn muốn hoặc không.
          </p>
        </div>
        <div className="btn border ms-auto">
          <span>Cài đặt bộ lọc</span>
        </div>
      </div>
    </div>
  );
};

export default SettingNotification;
