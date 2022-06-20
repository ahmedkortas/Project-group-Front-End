<<<<<<< HEAD
import "./App.css";
import NavComponent from "./components/NavComponent";
import NavCompLeftSide from "./components/NavCompLeftSide";
import VisitsFilter from "./components/VisitsFilter";
import VisitsList from "./components/VisitsList";
import { useState } from "react";
import VisitsFilterByUser from "./components/VisitsFilterByUser";

function App() {
  //a state that will update when we receive the data from the server
  return (
    <div className="App">
      <div className="splitScreen">
        <div className="leftPanel">
          <>
            <img
              src="https://cdn4.iconfinder.com/data/icons/basic-web-1/800/user-512.png"
              alt="the user default img"
              className="userImg"
            />
          </>
          <NavCompLeftSide />
        </div>
        <div className="rightPanel">
          <NavComponent />
          {/* to be added
            add the rest of the components here
            -a fillter for the visits : name of the component will be VisitsFilter   
            ////this will receive a function to change the state of the visit filtred with the new data 
            ////on click on the export button this will export an excel file with the data of the visits filtred        
            -the list of all visits will be loaded into the second component: name of the component will be VisitsList
            ////this will receive the list of all visits for all users 
            //// on click on the export button it will download an excel file with all the visits
            */}
          <label className="visitsFilter">
            if you want all the visits related to these users please leave the
            training sessions field empty and press send
          </label>
          <VisitsFilter />
          <VisitsList />
        </div>
      </div>
    </div>
  );
}

export default App;
=======
import "./App.css";
import NavComponent from "./components/NavComponent";
import NavCompLeftSide from "./components/NavCompLeftSide";
import VisitsFilter from "./components/VisitsFilter";
import VisitsList from "./components/VisitsList";
import { useState } from "react";
import VisitsFilterByUser from "./components/VisitsFilterByUser";

function App() {
  //a state that will update when we receive the data from the server
  return (
    <div className="App">
      <div className="splitScreen">
        <div className="leftPanel">
          <>
            <img
              src="https://cdn4.iconfinder.com/data/icons/basic-web-1/800/user-512.png"
              alt="the user default img"
              className="userImg"
            />
          </>
          <NavCompLeftSide />
        </div>
        <div className="rightPanel">
          <NavComponent />
          {/* to be added
            add the rest of the components here
            -a fillter for the visits : name of the component will be VisitsFilter   
            ////this will receive a function to change the state of the visit filtred with the new data 
            ////on click on the export button this will export an excel file with the data of the visits filtred        
            -the list of all visits will be loaded into the second component: name of the component will be VisitsList
            ////this will receive the list of all visits for all users 
            //// on click on the export button it will download an excel file with all the visits
            */}
          <label className="visitsFilter">
            if you want all the visits related to these users please leave the
            training sessions field empty and press send
          </label>
          <VisitsFilter />
          <VisitsList />
        </div>
      </div>
    </div>
  );
}

export default App;
>>>>>>> 8e51bae35b15cf980f4ac2d525ad6ebe5511e1f5
