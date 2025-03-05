import { useQueries } from "@tanstack/react-query";
import Nav from "../components/Nav";
import { fetchuser, fetchuserbyname } from "../services/services";
import Loading from "../components/Loading";
import UserDetail from "../components/UserDetail";
import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
const User = () => {
  // have to create a function for fetching the user details by using licence plate number
  const quries = useQueries({
    queries: [
      {
        queryKey: ["users"],
        queryFn: fetchuser,
      },
    ],
  });

  const data = quries.find((query) => query.isSuccess)?.data;
  const error = quries.find((query) => query.isError)?.error;
  const isLoading = quries.some((query) => query.isLoading);

  const [search, setSearch] = useState(false);
  const [searchuser, setSearchUser] = useState();
  const [searchInput, setSearchInput] = useState();
  const option = useRef();

  async function fetchspecificuser() {
    console.log(searchInput.length);
    if (searchInput.length <= 0) return;
    if (option.current.value == "name") {
      const data = await fetchuserbyname(searchInput);
      if (data) {
        setSearchUser(data[0]);
      } else {
        setSearch(false);
      }
    }
  }
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <div className="w-full md:w-[80%] flex flex-col sm:flex-row sm:justify-center sm:items-center flex-wrap gap-5 my-5 p-5">
        <div className="w-[300px] md:w-[500px] flex flex-row border-2 border-white rounded">
          <input
            type="text"
            placeholder="Search User"
            onChange={(e) => {
              e.preventDefault();
              setSearchInput(e.target.value);
              if (e.target.value.length == 0) {
                setSearch(false);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.length > 0) {
                e.preventDefault();
                setSearch(true);
                fetchspecificuser();
              }
            }}
            className="p-1 flex-1 outline-none"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setSearch(true);
              fetchspecificuser();
            }}
            className="p-1 border-l-2 border-white hover:cursor-pointer hover:px-2"
          >
            <IoSearch className="w-5 h-5" />
          </button>
        </div>
        <div className="w-40">
          <select
            name=""
            id=""
            ref={option}
            onInput={() => {
              console.log(option.current.value);
            }}
            className="w-full p-1 border border-orange-300 rounded outline outline-orange-300"
          >
            <option value="name" className="bg-gray-500">
              name
            </option>
            <option value="np" className="bg-gray-500">
              Licence Plate No
            </option>
          </select>
        </div>
      </div>
      {isLoading && <Loading />}
      {error && <h3>Error</h3>}
      {!isLoading && !error && !search && (
        <div className="w-full md:w-[80%] flex flex-col flex-wrap gap-6 p-3 justify-center">
          <h3 className="w-full flex justify-center text-2xl text-blue-300">
            User Details
          </h3>
          <div className="w-full flex flex-row gap-6 justify-center flex-wrap">
            {data.map((user) => (
              <UserDetail user={user} key={user._id + user.user_name} />
            ))}
          </div>
        </div>
      )}
      {search && <UserDetail user={searchuser} />}
    </div>
  );
};

export default User;
