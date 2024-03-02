import React from "react";
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const columns = [
 {
    title: "Payment Subject",
    field: "subject",
 },
 {
    title: "Type",
    field: "type",
 },
 {
    title: "Address",
    field: "address",
 },
 {
    title: "Message",
    field: "message",
 },
 {
    title: "Amount",
    field: "amount",
 },
];

function RecentActivity({ history }) {
 return (
    <Card title="Recent Activity" sx={{ width: "100%", minHeight: "663px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((row) => (
              <TableRow key={row.key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.message}</TableCell>
                <TableCell sx={{ color: row.type === "Send" ? "red" : "green" }}>
                 {row.type === "Send" ? "-" : "+"}
                 {row.amount} Matic
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
 );
}

export default RecentActivity;
