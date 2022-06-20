import axios from "axios";
import { useEffect, useState } from "react";
import TableVisit from "./TableVisit.jsx";

function VisitsTable(props) {
  const [visits, setVisits] = useState(null);
  //number of pages to display is also a state variable
  const [pages, setPages] = useState(0);
  //a state that will define the current page
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .post("https://huremden.herokuapp.com/visits/VisitActvityAndResults", {
        user_id: props.user,
      })
      .then((res) => {
        console.table(res.data);
        setPages(Math.ceil(res.data.length / 10));
        setVisits(res.data);
        setCurrentPage(1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.table(visits);
  return (
    <h1>hey</h1>
    // <>
    //   {pages != 0 && visits != null ? (
    //     <>
    //       <TableVisit startIndex={currentPage * 10} visits={visits} />
    //       <div className="tableFooter">
    //         {pages < 2 ? (
    //           <span
    //             className="page"
    //             onClick={(e) => {
    //               setCurrentPage(Number(e.target.innerHTML));
    //             }}
    //           >
    //             1
    //           </span>
    //         ) : currentPage > 2 && currentPage < pages ? (
    //           <>
    //             <span
    //               className="page"
    //               onClick={(e) => {
    //                 setCurrentPage(Number(e.target.innerHTML));
    //               }}
    //             >
    //               1
    //             </span>
    //             <span
    //               className="page"
    //               onClick={(e) => {
    //                 setCurrentPage(Number(e.target.innerHTML));
    //               }}
    //             >
    //               {currentPage - 1}
    //             </span>
    //             <span
    //               id="active"
    //               onClick={(e) => {
    //                 setCurrentPage(Number(e.target.innerHTML));
    //               }}
    //             >
    //               {currentPage}
    //             </span>
    //             <span
    //               className="page"
    //               onClick={(e) => {
    //                 setCurrentPage(Number(e.target.innerHTML));
    //               }}
    //             >
    //               {currentPage + 1}
    //             </span>
    //             <span
    //               className="page"
    //               onClick={(e) => {
    //                 setCurrentPage(Number(e.target.innerHTML));
    //               }}
    //             >
    //               {pages}
    //             </span>
    //           </>
    //         ) : currentPage <= 2 && pages > 2 ? (
    //           <>
    //             <span
    //               className="page"
    //               onClick={(e) => {
    //                 setCurrentPage(Number(e.target.innerHTML));
    //               }}
    //             >
    //               1
    //             </span>
    //             <span
    //               className="page"
    //               onClick={(e) => {
    //                 setCurrentPage(Number(e.target.innerHTML));
    //               }}
    //             >
    //               2
    //             </span>
    //             <span
    //               className="page"
    //               onClick={(e) => {
    //                 setCurrentPage(Number(e.target.innerHTML));
    //               }}
    //             >
    //               3
    //             </span>
    //             <span
    //               className="page"
    //               onClick={(e) => {
    //                 setCurrentPage(Number(e.target.innerHTML));
    //               }}
    //             >
    //               {pages}
    //             </span>
    //           </>
    //         ) : (
    //           pages >
    //           2(
    //             <>
    //               <span
    //                 className="page"
    //                 onClick={(e) => {
    //                   setCurrentPage(Number(e.target.innerHTML));
    //                 }}
    //               >
    //                 1
    //               </span>
    //               <span
    //                 onClick={(e) => {
    //                   setCurrentPage(Number(e.target.innerHTML));
    //                 }}
    //               >
    //                 {currentPage - 1}
    //               </span>
    //               <span
    //                 id="active"
    //                 className="page"
    //                 onClick={(e) => {
    //                   setCurrentPage(Number(e.target.innerHTML));
    //                 }}
    //               >
    //                 {currentPage}
    //               </span>
    //             </>
    //           )
    //         )}
    //       </div>
    //     </>
    //   ) : visits != null && visits.length === 0 ? (
    //     <>
    //       <br />
    //       no data to be loaded
    //     </>
    //   ) : (
    //     <div> loading...</div>
    //   )}{" "}
    // </>
  );
}

export default VisitsTable;
