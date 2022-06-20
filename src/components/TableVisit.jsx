import React from "react";
import Table from "react-bootstrap/Table";
import ReactExcelFile from "./ReactExcelFile.jsx";
const moment = require("moment");

export const TableVisit = ({ startIndex, visits }) => {
  const visitRow = (startIndex) => {
    return <tr key={startIndex["id"]} className="even"></tr>;
  };

  let startIndexHolder = [];
  console.log(startIndex);
  if (visits.length > 10) {
    for (let i = startIndex - 10; i < startIndex; i++) {
      visits[i]["login"] = moment(visits[i]["login"]).format(
        "YYYY/MM/DD HH:mm"
      );
      visits[i]["logout"] = moment(visits[i]["logout"]).format(
        "YYYY/MM/DD HH:mm"
      );
      startIndexHolder.push(visits[i]);
    }
  } else {
    for (let i = startIndex - 10; i < visits.length; i++) {
      visits[i]["login"] = moment(visits[i]["login"]).format(
        "YYYY/MM/DD HH:mm"
      );
      visits[i]["logout"] = moment(visits[i]["logout"]).format(
        "YYYY/MM/DD HH:mm"
      );
      startIndexHolder.push(visits[i]);
    }
  }
  console.log(startIndexHolder);

  const tableHeader = (
    <thead className="bgvi">
      <tr>
        <th>#</th>
        <th>Training Sessions</th>
        <th>export the file</th>
      </tr>
    </thead>
  );

  return (
    <Table striped bordered hover>
      {tableHeader}
      {startIndexHolder.map((visit, index) => visitRow(visit))}
    </Table>
  );
};
export default TableVisit;
