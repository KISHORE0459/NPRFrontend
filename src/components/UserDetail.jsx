import PropTypes from "prop-types";
import { FaRupeeSign } from "react-icons/fa";

const UserDetail = ({ user }) => {
  return (
    user && (
      <div className=" w-80 bg-gray-800 md:w-92 shadow shadow-gray-500 flex flex-col gap-y-2 p-2 rounded hover:cursor-pointer hover:shadow-sky-200  hover:scale-x-105">
        <div className="flex flex-row justify-between">
          <h3 className="text-blue-300 text-[20px]">{user.user_name}</h3>
          <h3 className="flex flex-row items-center">
            <FaRupeeSign className="w-4 h-4" />
            {user.wallet_balance}
          </h3>
        </div>
        <div>
          <h3>Licence Plate Number : {user.number_plate}</h3>
          <h3>Mobile No : {user.mobile_number}</h3>
        </div>
      </div>
    )
  );
};

UserDetail.propTypes = {
  user: PropTypes.any,
};

export default UserDetail;
