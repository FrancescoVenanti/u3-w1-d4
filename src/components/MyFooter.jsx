const MyFooter = (props) => {
	return (
		<>
			<footer className="text-center bg-dark">
				<p className="text-white py-2">{props.footerText}</p>
			</footer>
		</>
	);
};

export default MyFooter;
