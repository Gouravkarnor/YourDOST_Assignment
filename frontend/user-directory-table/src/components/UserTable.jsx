import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";

const UserTable = ({ users }) => {
  // Handle empty state
  if (!users || users.length === 0) {
    return (
      <div className="text-center p-10 text-gray-500">
        No users found matching your criteria.
      </div>
    );
  }

  return (
    <TableContainer
      component={Paper}
      className="shadow-lg rounded-lg overflow-hidden"
    >
      <Table sx={{ minWidth: 650 }} aria-label="user table">
        <TableHead sx={{ bgcolor: "#1976d2" }}>
          <TableRow>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Avatar
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              First Name
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Last Name
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              Email
            </TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>
              ID
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": { bgcolor: "#f5f5f5" },
                transition: "0.2s",
              }}
            >
              <TableCell>
                <Avatar alt={user.first_name} src={user.avatar} />
              </TableCell>
              <TableCell className="font-medium text-gray-800">
                {user.first_name}
              </TableCell>
              <TableCell className="text-gray-600">{user.last_name}</TableCell>
              <TableCell className="text-blue-600">{user.email}</TableCell>
              <TableCell className="text-gray-400">#{user.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
