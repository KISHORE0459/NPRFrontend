import Features from "../components/Features";
import Flow from "../components/Flow";
import Nav from "../components/Nav";

const Overview = () => {
  return (
    <div>
      <Nav />
      <div className="w-full flex flex-col gap-5 justify-center items-center pt-5">
        <Flow />
        <Features />
      </div>
    </div>
  );
};

export default Overview;
