import PropTypes from "prop-types";
import UserExitDetail from "./UserExitDetails";

const ExitDetails = ({ data }) => {
  return (
    <div className="flex flex-col items-center w-[80%] gap-y-10 p-5">
      <h3 className="text-xl text-blue-300">User Entry Details</h3>
      <div className="w-full flex flex-row justify-center flex-wrap gap-6">
        {data.map((dat) => (
          <UserExitDetail user={dat} key={dat.number_plate} />
        ))}
      </div>
    </div>
  );
};

ExitDetails.propTypes = {
  data: PropTypes.any,
};

export default ExitDetails;
