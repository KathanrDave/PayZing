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
        </Table>
      </TableContainer>
    </Card>
 );
}

export default RecentActivity;
