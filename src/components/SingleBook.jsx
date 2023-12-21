import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";

class SingleBook extends Component {
	state = {
		selected: false,
	};
	render() {
		const { book } = this.props;

		return (
			<Col key={book.asin} className="col-12 col-md-4 col-lg-3 border-bottom border-3 border-info">
				<Card
					className={`p-3 border-0 ${this.state.selected ? "bg-info" : ""}`}
					onClick={() => {
						this.setState({ selected: !this.state.selected });
					}}
				>
					<Card.Img variant="top" src={book.img} className="" />
					<Card.Body>
						<Card.Title className="fs-6">{book.title}</Card.Title>
						<Card.Text className="mb-0">{book.price} Euro</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

export default SingleBook;
