import { useQueries } from "@tanstack/react-query";
import Nav from "../components/Nav";
import { fetchentrydata } from "../services/services";
import Loading from "../components/Loading";
import Error from "../components/Error";
import EntryDetails from "../components/EntryDetails";
const Entries = () => {
  const queries = useQueries({
    queries: [
      {
        queryKey: ["entry"],
        queryFn: fetchentrydata,
      },
    ],
  });

  const isLoading = queries.some((query) => query.isLoading);
  const error = queries.find((query) => query.isError)?.error;
  const data = queries.find((query) => query.isSuccess)?.data;

  return (
    <div className="flex flex-col items-center">
      <Nav />
      {isLoading && <Loading />}
      {error && <Error />}
      {!isLoading && !error && <EntryDetails data={data} />}
    </div>
  );
};

export default Entries;
