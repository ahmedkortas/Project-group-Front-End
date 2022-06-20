import axios from "axios";
import moment from "moment";

function VisitsFilterByUser({ visits }) {
  let clickHandler = (e) => {
    e.preventDefault();
    let input = document.getElementById("visitsFilter").value;
    let filter = input.split(",");
    //transfor all elements of the filter array to numbers with for loop
    for (let i = 0; i < filter.length; i++) {
      filter[i] = Number(filter[i]);
    }
    let obj = visits;
    //loop over the obj and pop every elements where training_sessions is not included in the filter array
    let arr = [];
    for (let i = 0; i < obj.length; i++) {
      let obj2 = [];
      if (filter.includes(obj[i].training_sessions)) {
        obj2[0] = obj[i]["id"];
        obj2[1] = obj[i]["user_name"];
        obj2[2] = obj[i]["training_sessions"];
        obj2[3] = moment(obj[i]["start_time"]).format("HH:mm");
        // obj2["end_time"] = moment(obj[i]["end_time"]).format("HH:mm");

        obj2[4] = moment(obj[i]["start_time"]).format("DD-MM-YYYY");
        obj2[5] = moment(obj[i]["start_time"]).diff(obj[i]["end_time"]); // need to be changed to the last end time and switch the diff
        arr.push(obj2);
      }
    }
    axios({
      url: "https://huremden.herokuapp.com/visits/excel",
      method: "post",
      data: arr,
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

  return (
    <div className="visitsList">
      <form onSubmit={clickHandler}>
        <input
          id="visitsFilter"
          type="text"
          placeholder="enter the training saision please separe with a comma ,"
          style={{ width: "70%" }}
        />
        <input type="submit" placeholder="send" />
      </form>
    </div>
  );
}

export default VisitsFilterByUser;
