import React from "react";
import Table from "react-bootstrap/Table";
import ReactExcelFile from "./ReactExcelFile.jsx";
var moment = require("moment");

export const TableUser = ({ numberOfUsers, allUsers, setViews }) => {
  let users = [];
  console.log(allUsers);
  for (let i = numberOfUsers - 10; i < numberOfUsers; i++) {
    users.push(
      <tr key={i} className="even">
        <td>{i}</td>
        <td onClick={() => setViews(allUsers[i]["id"])}>
          {allUsers[i]["first_name"] + " " + allUsers[i]["last_name"]}
        </td>
        <td>{allUsers[i]["email"]}</td>
        <td>
          {allUsers[i]["last_login"] === null
            ? "Never"
            : moment(allUsers[i]["last_login"]).format("DD/MM/YYYY HH:mm")}
        </td>
      </tr>
    );
  }
  const tableHeader = (
    <thead className="bgvi">
      <tr>
        <th>#</th>
        <th>Gesamter Name</th>
        <th>Email</th>
        <th>Letzte Anmeldung</th>
      </tr>
    </thead>
  );

  return (
    <Table striped bordered hover>
      {tableHeader}
      <tbody>{users}</tbody>
    </Table>
  );
};
export default TableUser;
