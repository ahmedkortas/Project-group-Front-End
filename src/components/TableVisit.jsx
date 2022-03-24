import React from "react";
import Table from "react-bootstrap/Table";

export const TableVisit = ({ visits }) => {
	const CustomerRow = (visits, index) => {
		return (
			<tr key={index} className="even">
				<td> {index + 1} </td>
				<td>{visits["visits"]["id"]}</td>
				<td>{visits["username"]}</td>
				<td>{visitsemail}</td>
				<td>{visitsaddress}</td>
				<td>{visitszipcode}</td>
			</tr>
		);
	};

	const CustomerTable = customers.map((cust, index) =>
		CustomerRow(cust, index),
	);

	const tableHeader = (
		<thead className="bgvi">
			<tr>
				<th>#</th>
				<th>Visit Id</th>
				<th>username</th>
				<th>start time</th>
				<th>training sessions</th>
				<th>results</th>
			</tr>
		</thead>
	);

	return (
		<Table striped bordered hover>
			{tableHeader}
			<tbody>{CustomerTable}</tbody>
		</Table>
	);
};
export default Table;
