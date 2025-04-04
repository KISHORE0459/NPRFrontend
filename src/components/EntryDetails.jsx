import PropTypes from "prop-types";
import UserEntryDetail from "./UserEntryDetail";
const EntryDetails = ({ data }) => {
  return (
    <div className="flex flex-col items-center w-[80%] gap-y-10 p-5">
      <h3 className="text-2xl text-[#1E40AF] font-semibold">
        User Entry Details
      </h3>
      <div className="flex flex-row flex-wrap gap-4">
        {data.map((dat) => (
          <UserEntryDetail user={dat} key={dat.number_plate} />
        ))}
      </div>
    </div>
  );
};

EntryDetails.propTypes = {
  data: PropTypes.any,
};
export default EntryDetails;
