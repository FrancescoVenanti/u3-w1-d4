import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = (props) => (
	<Navbar expand="md" className="bg-info-subtle">
		<Container fluid="md">
			<Navbar.Brand href="#">{props.brand}</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto">
					<Nav.Link href="#">Home</Nav.Link>
					<Nav.Link href="#">About</Nav.Link>
					<Nav.Link href="#">browse</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default MyNav;
