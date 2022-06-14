import axios from "axios";
import { post } from "jquery";
import moment from "moment";

function ReactExcelFile(props) {
  let requestToGetExcel = () => {
    let obj = props.visits;
    let filtredArr = [];
    filtredArr.push(props.extraParame);
    console.log(filtredArr, "with the extra keys");
    for (let i = 0; i < obj.length; i++) {
      let obj2 = [];
      //['Visit Id','User', 'Training session',  'Start', 'Date,'Duration'] the data should look like this array
      if (obj[i]["trainingsaission"] <= props.number) {
        obj2.push(obj[i]["visit_id"]);
        obj2.push(obj[i]["username"]);
        obj2.push(obj[i]["training_program"]);
        obj2.push(obj[i]["login"]);
        obj2.push(obj[i]["duration"]);
        obj2.push(obj[i]["trainingsaission"]);
        obj2.push(obj[i]["numberOfResults"]);
        obj2.push(obj[i]["results"]);
        filtredArr.push(obj2);
      }
    }
    console.log(filtredArr);
    axios({
      url: "http://127.0.0.1:8000/visits/excel",
      method: "post",
      data: filtredArr,
      responseType: "blob",
    }).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.xls"); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  };
  return (
    <button onClick={() => requestToGetExcel()}>
      <i class="fa fa-file-excel-o"></i>
    </button>
  );
}
export default ReactExcelFile;
