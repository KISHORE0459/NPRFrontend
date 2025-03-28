import { useQueries } from "@tanstack/react-query";
import Nav from "../components/Nav";
import { fetchexitdata } from "../services/services";
import ExitDetails from "../components/ExitDetails";
import Loader from "../components/Loader";
const Exits = () => {
  const quries = useQueries({
    queries: [
      {
        queryKey: ["exit"],
        queryFn: fetchexitdata,
      },
    ],
  });

  const data = quries.find((quries) => quries.isSuccess)?.data;
  const error = quries.find((quries) => quries.isError)?.error;
  const isLoading = quries.some((quries) => quries.isLoading);
  return (
    <div className="flex flex-col w-full items-center">
      <Nav />
      {isLoading && <Loader />}
      {error && <h3>There is Some Error</h3>}
      {!isLoading && !error && <ExitDetails data={data} />}
    </div>
  );
};

export default Exits;
