import PropTypes from "prop-types";
import { FaRupeeSign } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";

const UserDetail = ({ user }) => {
  return (
    user && (
      <div className=" w-80 md:w-92 min-h-28 shadow-lg shadow-gray-300 flex flex-col gap-y-2 p-2 rounded hover:cursor-pointer hover:shadow-gray-500  hover:scale-x-105">
        <div className="flex flex-row justify-between">
          <h3 className="text-[20px] font-semibold text-[#1E40AF]">
            {user.user_name}
          </h3>
          <h3 className="flex flex-row items-center text-[#303133]">
            <FaRupeeSign className="w-4 h-4" />
            {user.wallet_balance}
          </h3>
        </div>
        <div className="w-full">
          <div className="flex flex-row items-center gap-2 text-[#374151]">
            <IoCarSportOutline />
            <h3>Licence Plate Number : {user.number_plate}</h3>
          </div>
          <div className="flex flex-row items-center gap-2 text-[#374151]">
            <CiMobile2 />
            <h3>Mobile No : {user.mobile_number}</h3>
          </div>
        </div>
      </div>
    )
  );
};

UserDetail.propTypes = {
  user: PropTypes.any,
};

export default UserDetail;
