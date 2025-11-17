import { useState, useEffect, useMemo } from "react";
import { fetchUsers } from "../api/userApi";
import UserTable from "../components/UserTable.jsx"; // Ensure you create this component
import SearchBar from "../components/SearchBar.jsx"; // Ensure you create this component
import FilterSortPanel from "../components/FilterSortPanel"; // Ensure you create this component
import Loader from "../components/Loader"; // Ensure you create this component
import { Pagination, Alert } from "@mui/material";

const UserDirectory = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filterDomain, setFilterDomain] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers(page);
        setUsers(data.data);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, [page]);

  // Client-side filtering logic
  const processedUsers = useMemo(() => {
    let result = [...users];

    // Search
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(
        (user) =>
          user.first_name.toLowerCase().includes(lowerTerm) ||
          user.email.toLowerCase().includes(lowerTerm)
      );
    }

    // Domain Filter
    if (filterDomain) {
      result = result.filter((user) =>
        user.email.toLowerCase().includes(filterDomain.toLowerCase())
      );
    }

    // Sort
    if (sortOption) {
      result.sort((a, b) => {
        if (a[sortOption] < b[sortOption]) return -1;
        if (a[sortOption] > b[sortOption]) return 1;
        return 0;
      });
    }
    return result;
  }, [users, searchTerm, sortOption, filterDomain]);

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Directory</h1>
      {error && <Alert severity="error">{error}</Alert>}

      <div className="bg-white p-4 rounded shadow mb-6 flex flex-col md:flex-row gap-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterSortPanel
          sortOption={sortOption}
          setSortOption={setSortOption}
          filterDomain={filterDomain}
          setFilterDomain={setFilterDomain}
        />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          <UserTable users={processedUsers} />
          <div className="flex justify-center mt-6">
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, v) => setPage(v)}
              color="primary"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default UserDirectory;
