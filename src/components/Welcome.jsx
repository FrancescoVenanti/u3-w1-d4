import { Alert, Container } from "react-bootstrap";

const Welcome = (props) => {
	return (
		<>
			<Container fluid="md">
				<Alert key="primary" variant="primary" className="mt-3">
					{props.alertText}
				</Alert>
				<h2 className="py-2 text-success text-start">ReactLibrary shop</h2>
			</Container>
		</>
	);
};

export default Welcome;
