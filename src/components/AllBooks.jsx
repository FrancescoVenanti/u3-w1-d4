import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Component } from "react";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import SingleBook from "./SingleBook";

class Books extends Component {
	state = {
		selectedCategory: fantasy,
		searched: "",
	};
	render() {
		return (
			console.log(this.state),
			(
				<Container fluid="md">
					<Col sm={4} className="mx-auto mb-3">
						<Form.Control
							type="text"
							placeholder="Cerca..."
							className=" rounded-pill px-4 py-2 fs-4"
							value={this.state.searched}
							onChange={(event) => this.setState({ searched: event.target.value })}
						/>
					</Col>
					<Button
						className="btn btn-outline-success bg-transparent me-2 fs-4 rounded-pill px-3 py-2"
						onClick={() => this.setState({ selectedCategory: fantasy })}
					>
						Fantasy
					</Button>
					<Button
						className="btn btn-outline-success bg-transparent me-2 fs-4 rounded-pill px-3 py-2"
						onClick={() => this.setState({ selectedCategory: history })}
					>
						history
					</Button>
					<Button
						className="btn btn-outline-success bg-transparent me-2 fs-4 rounded-pill px-3 py-2"
						onClick={() => this.setState({ selectedCategory: horror })}
					>
						horror
					</Button>
					<Button
						className="btn btn-outline-success bg-transparent me-2 fs-4 rounded-pill px-3 py-2"
						onClick={() => this.setState({ selectedCategory: romance })}
					>
						romance
					</Button>
					<Button
						className="btn btn-outline-success bg-transparent me-2 fs-4 rounded-pill px-3 py-2"
						onClick={() => this.setState({ selectedCategory: scifi })}
					>
						scifi
					</Button>
					<Row className="g-3 mt-3">
						{this.state.selectedCategory.map((book) => {
							if (book.title.toLowerCase().includes(this.state.searched.toLowerCase())) {
								return <SingleBook key={book.asin} book={book} />;
							}
						})}
					</Row>
				</Container>
			)
		);
	}
}
export default Books;
