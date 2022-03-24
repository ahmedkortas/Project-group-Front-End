import { Table } from "react-bootstrap";
import axios from "axios";
import obj from "./data.js";

function VisitsList(props) {
	function getInitialData() {
		console.log(obj);
		let arr = [];
		//filter the array from all objects that have an empty array as vists property

		for (let i = 0; i < obj.length; i++) {
			if (obj[i].visits.length > 0) {
				let visits = [];
				for (let j = 0; j < obj[i].visits.length; j++) {
					if (obj[i].visits[j].results.length > 0) {
						obj[i].visits[j]["user_name"] = obj[i]["user_name"];
						obj[i].visits[j]["user_id"] = obj[i]["user_id"];
						visits.push(obj[i].visits[j]);
					}
				}
				if (visits.length > 0) {
					obj[i]["visits"] = visits;
					console.log("the new visits array is: ", obj[i]["visits"]);
					arr.push(visits);
				}
			}

			// 	for (let j = 0; j < obj[i].visits.length; j++) {}
			// }
		}
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr[i].length; j++) {
				arr[i][j]["training sessions"] = j + 1;
			}
		}
		arr = arr.flat(2);
		console.log(arr, arr[0]);
	}
	getInitialData();
	return (
		<>
			<br />
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan={2}>Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
}

export default VisitsList;
