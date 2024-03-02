import React from "react";
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import theme from "../acessories/theme";
import ThemeProvider from "@mui/material";
const columns = [
    {
      title: "Payment Subjet",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Amount",
      key: "amount",
      render: (_, record) => (
        <div
          style={record.type === "Send" ? { color: "red" } : { color: "green" }}
        >
          {record.type === "Send" ? "-" : "+"}
          {record.amount} Matic
        </div>
      ),
    },
  ];
function RecentActivity({ history }) {
 return (
    <ThemeProvider theme={theme}>
    <Card title="Recent Activity" sx={{ width: "100%", minHeight: "663px", }}>
      <TableContainer component={Paper} sx={{ }}>
        <Table sx={{ minWidth: 650, }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field} sx={{fontSize:theme.typography.body1.fontSize,fontWeight:theme.typography.body1.fontWeight,}}>{column.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Card>
    </ThemeProvider>
 );
}

export default RecentActivity;
