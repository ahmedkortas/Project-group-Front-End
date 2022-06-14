import axios from "axios";
import moment from "moment";
import { useEffect } from "react";
import AllActivity from "./AllActivity";

function VisitsFilter({ visits }) {
  let clickHandler = (e) => {
    e.preventDefault();
    let inputUser = document.getElementById("visitsFilterUsers").value;
    let inputTrainingSaission = document.getElementById(
      "visitsFilterTrainingSaission"
    ).value;
    var filterTS = inputTrainingSaission.split(",");
    var filterUser = inputUser.split(",");
    //transfor all elements of the filter array to numbers with for loop
    for (let i = 0; i < filterTS.length; i++) {
      filterTS[i] = Number(filterTS[i]);
    }

    let obj = {
      TrainingSessions: filterTS,
      users: filterUser,
    };
    axios({
      url: "http://127.0.0.1:8000/visits/training",
      method: "post",
      data: obj,
      responseType: "blob",
    }).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.xls"); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
    console.table(obj);
  };

  //fetch data from the server to get all training programs

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/visits/trainingPrograms")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  return (
    <div className="visitsList">
      <form onSubmit={clickHandler}>
        <input
          id="visitsFilterUsers"
          type="text"
          placeholder="enter the user or users please separate with a comma,"
          style={{ width: "70%" }}
        />
        <input
          id="visitsFilterTrainingSaission"
          type="text"
          placeholder="enter the training saision please separe with a comma ,"
          style={{ width: "70%" }}
        />
        <input type="submit" placeholder="send" />
      </form>
      <AllActivity />
    </div>
  );
}

export default VisitsFilter;
