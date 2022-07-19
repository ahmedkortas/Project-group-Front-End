import axios from "axios";

function AllActivity(props) {
  let requestToGetExcel = () => {
    axios({
      url: "http://104.248.205.157/visits/training",
      method: "post",
      data: { users: "all", TrainingSessions: "all" },
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

  //returns a button to click on to download the file
  return (
    <button onClick={() => requestToGetExcel()}>
      <i class="fa fa-file-excel-o"></i>
    </button>
  );
}

export default AllActivity;
