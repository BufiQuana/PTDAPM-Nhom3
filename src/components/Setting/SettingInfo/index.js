import * as React from "react";
import { useSelector } from "react-redux";
import InputModal from "../../InputModal";

const SettingInfo = () => {
  const auth = useSelector((state) => {
    return state.auth;
  });

  return (
    <div className="bg-white p-3 rounded-3 h-100 d-flex flex-column">
      <InputModal title="ID" value={auth.user_id} action={(e) => {}} disabled />
      <InputModal
        title="Họ và tên"
        value={auth.fullName}
        action={(e) => {}}
        disabled
      />
      <InputModal
        title="Email"
        value={auth.email}
        action={(e) => {}}
        disabled
      />
      <InputModal
        title="Vai trò"
        value={auth.roles}
        action={(e) => {}}
        disabled
      />
    </div>
  );
};

export default SettingInfo;
