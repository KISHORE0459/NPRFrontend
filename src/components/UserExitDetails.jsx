import PropTypes from "prop-types";

const UserExitDetail = ({ user }) => {
  return (
    <div className="w-80 h-fit shadow shadow-gray-500 flex flex-col gap-2 p-3 hover:cursor-pointer hover:shadow-blue-300 hover:scale-x-105 rounded">
      <div className="flex flex-row justify-between">
        <h3 className="text-blue-300 text-[20px]">{user.user_name}</h3>
        <h3>{user.ExitTime}</h3>
      </div>
      <div className="flex flex-row gap-2">
        <h3>Licence Plate Number : </h3>
        <h3>{user.number_plate}</h3>
      </div>
      <div className="flex flex-row gap-2">
        <h3>Mobile Number : </h3>
        <h3>{user.mobile_number}</h3>
      </div>
    </div>
  );
};

UserExitDetail.propTypes = {
  user: PropTypes.any,
};

export default UserExitDetail;
