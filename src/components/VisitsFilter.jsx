function VisitsFilter(props) {
	return (
		<div className="visitsList">
			<form>
				<input
					type="text"
					placeholder="enter the training saision"
					style={{ width: "70%" }}
				/>
				<input type="submit" placeholder="send" />
			</form>
		</div>
	);
}

export default VisitsFilter;
