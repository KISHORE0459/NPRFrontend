import { useQueries } from "@tanstack/react-query";
import Nav from "../components/Nav";
import {
  fetchuser,
  fetchuserbyname,
  fetchuserbynp,
} from "../services/services";
import UserDetail from "../components/UserDetail";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Loader from "../components/Loader";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import toast from "react-hot-toast";
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
  const [searchuser, setSearchUser] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchFilter, setSearchFilter] = useState("name");

  async function fetchspecificuser() {
    if (searchInput.length <= 0) return;
    if (searchFilter == "name") {
      const data = await fetchuserbyname(searchInput);
      if (data) {
        setSearch(true);
        setSearchUser(data[0]);
      } else {
        setSearch(false);
        toast.error("User Not Found !");
      }
    } else {
      const data = await fetchuserbynp(searchInput);
      if (data) {
        setSearch(true);
        setSearchUser(data[0]);
      } else {
        setSearch(false);
        toast.error("User Not Found !");
      }
    }
  }
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <div className="w-full md:w-[80%] flex flex-col sm:flex-row sm:justify-center sm:items-center flex-wrap gap-5 my-5 p-5">
        <div className="w-[300px] md:w-[500px] flex flex-row border-2 border-[#1E40AF] rounded text-[17px]">
          <input
            type="text"
            placeholder="Search User"
            onChange={(e) => {
              e.preventDefault();
              if (e.target.value.length == 0) {
                setSearch(false);
              } else {
                setSearchInput(e.target.value);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.length > 0) {
                console.log("working");
                e.preventDefault();
                fetchspecificuser();
              }
            }}
            className="p-2 flex-1 outline-none"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              fetchspecificuser();
            }}
            className="p-1 border-l-2 border-[#1E40AF] w-10 hover:cursor-pointer hover:w-13 flex justify-center  items-center bg-[#0b7937]"
          >
            <IoSearch className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="w-40">
          <FormControl>
            <InputLabel>Filter</InputLabel>
            <Select
              labelId="filter"
              id="filter"
              label="Filter"
              onChange={(e) => {
                console.log(searchFilter);
                setSearchFilter(e.target.value);
              }}
              className="w-52 text-black h-[40px] flex justify-center items-center"
            >
              <MenuItem value={"name"}>Name</MenuItem>
              <MenuItem value={"np"}>Licence Plate No</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {isLoading && <Loader />}
      {error && <h3>Error</h3>}
      {!isLoading && !error && !search && (
        <div className="w-full md:w-[80%] flex flex-col flex-wrap gap-6 p-3 justify-center">
          <h3 className="w-full flex justify-center text-2xl text-[#1E40AF] font-semibold">
            User Details
          </h3>
          <div className="w-full flex flex-row gap-8 flex-wrap">
            {data.map((user) => (
              <UserDetail
                user={user}
                key={user?.user_name + user?.number_plate}
              />
            ))}
          </div>
        </div>
      )}
      {search && <UserDetail user={searchuser} />}
    </div>
  );
};

export default User;
