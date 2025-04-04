import Nav from "../components/Nav";
import NearestPath from "../components/NearestPath";

const Space = () => {
  return (
    <div>
      <Nav />
      <div className="w-full md:h-[500px] flex justify-center items-center mt-5">
        <NearestPath />
      </div>
    </div>
  );
};

export default Space;
