import axios from "axios";
// import obj from "./data.js";
import { TableVisit } from "./TableVisit.jsx";
import { useState, useEffect } from "react";
import UserTable from "./UserTable.jsx";
import VisitTable from "./VisitsTable.jsx";
import parseAllResults from "./function.js";

function VisitsList(props) {
  const [views, setViews] = useState("users");

  return (
    <>
      {views === "users" ? (
        <UserTable setViews={setViews} />
      ) : (
        <>
          {console.log(views)}
          <button onClick={() => setViews("users")}>back</button>
          <VisitTable setViews={setViews} user={views} />
        </>
      )}
    </>
  );
}

export default VisitsList;
