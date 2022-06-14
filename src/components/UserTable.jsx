import axios from "axios";
import { useEffect, useState } from "react";
import TableUsers from "./TableUsers.jsx";

function UserTable(props) {
  const [users, setUsers] = useState(null);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://huremden.herokuapp.com/visits/users")
      .then((res) => {
        // console.table(res.data);
        setUsers(res.data);
        setCurrentPage(1);
        setPages(Math.floor(res.data.length / 10));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(users);
  return (
    <div>
      {users === null || users.length === 0 ? (
        <span>Loading...</span>
      ) : (
        <div>
          <TableUsers
            numberOfUsers={currentPage * 10}
            allUsers={users}
            setViews={props.setViews}
          />
          <div className="tableFooter">
            {currentPage > 2 && currentPage < pages ? (
              <>
                <span
                  className="page"
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.innerHTML));
                  }}
                >
                  1
                </span>
                <span
                  className="page"
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.innerHTML));
                  }}
                >
                  {currentPage - 1}
                </span>
                <span
                  id="active"
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.innerHTML));
                  }}
                >
                  {currentPage}
                </span>
                <span
                  className="page"
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.innerHTML));
                  }}
                >
                  {currentPage + 1}
                </span>
                <span
                  className="page"
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.innerHTML));
                  }}
                >
                  {pages}
                </span>
              </>
            ) : currentPage <= 2 ? (
              <>
                <span
                  className="page"
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.innerHTML));
                  }}
                >
                  1
                </span>
                <span
                  className="page"
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.innerHTML));
                  }}
                >
                  2
                </span>
                <span
                  className="page"
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.innerHTML));
                  }}
                >
                  3
                </span>
                <span
                  className="page"
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.innerHTML));
                  }}
                >
                  {pages}
                </span>
              </>
            ) : (
              <>
                <span
                  className="page"
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.innerHTML));
                  }}
                >
                  1
                </span>
                <span
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.innerHTML));
                  }}
                >
                  {currentPage - 1}
                </span>
                <span
                  id="active"
                  className="page"
                  onClick={(e) => {
                    setCurrentPage(Number(e.target.innerHTML));
                  }}
                >
                  {currentPage}
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserTable;
