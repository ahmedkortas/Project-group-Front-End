import "./App.css";
import NavComponent from "./components/NavComponent";
import NavCompLeftSide from "./components/NavCompLeftSide";
import VisitsFilter from "./components/VisitsFilter";
import VisitsList from "./components/VisitsList";

function App() {
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
					<VisitsFilter />
					<VisitsList />
				</div>
			</div>
		</div>
	);
}

export default App;
