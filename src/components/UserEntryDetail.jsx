import PropTypes from "prop-types";
import { CiMobile2 } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";

const UserEntryDetail = ({ user }) => {
  return (
    <div className="w-82 md:w-92 min-h-36 h-fit shadow-lg shadow-gray-300 flex flex-col gap-2 p-3 hover:cursor-pointer hover:shadow-gray-500 rounded">
      <div className="flex flex-row justify-between">
        <h3 className="text-[20px] font-semibold text-[#1E40AF]">
          {user.user_name || "UnRegistered User"}
        </h3>
        <h3 className="text-[#6B7280]">
          {user.EnterTime.slice(6, 16) + " " + user.EnterTime.slice(16, 26)}
        </h3>
      </div>
      <div className="flex flex-row gap-2 items-center text-[#374151]">
        <IoCarSportOutline />
        <h3>Licence Plate Number : </h3>
        <h3>{user.number_plate}</h3>
      </div>
      <div className="flex flex-row gap-2 items-center text-[#374151]">
        <CiMobile2 />
        <h3>Mobile Number : </h3>
        <h3>{user.mobile_number}</h3>
      </div>
    </div>
  );
};

UserEntryDetail.propTypes = {
  user: PropTypes.any,
};

export default UserEntryDetail;
