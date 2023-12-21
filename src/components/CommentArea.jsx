import { Component } from "react";
import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";

class CommentArea extends Component {
	state = {
		comment: {
			comment: "",
			rate: "",
			elementId: "",
		},
	};

	handleChange = (propertyName, propertyValue) => {
		this.setState({ comment: { ...this.state.comment, [propertyName]: propertyValue } });
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		this.handleLoading(true);

		try {
			const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
				method: "POST",
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzc1MjBkOGEyMDAwMThhNDhhMzQiLCJpYXQiOjE3MDMxNjY1NTAsImV4cCI6MTcwNDM3NjE1MH0.xpAfbfz73SaWKX8FN4QtFii-YYgnch1JjKF1YMFSDwo",
				},
				body: JSON.stringify(this.state.comment),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				this.setState({
					comment: {
						comment: "",
						rate: "",
						elementId: "",
					},
				});

				const newComment = await response.json();
			}
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<Container className={this.props.className}>
				<h2 className="text-center mt-5">Lascia una recensione</h2>

				<Row className="justify-content-center">
					<Col md={8}>
						<Form onSubmit={this.handleSubmit}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Commento</Form.Label>
								<Form.Control
									type="text"
									placeholder="Inserisci il tuo commento"
									value={this.state.comment.comment}
									onChange={(event) => this.handleChange("comment", event.target.value)}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Valutazione</Form.Label>
								<Form.Control
									type="number"
									placeholder="inserisci una valutazione"
									value={this.state.comment.rate}
									onChange={(event) => this.handleChange("rate", event.target.value)}
								/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}
export default CommentArea;
