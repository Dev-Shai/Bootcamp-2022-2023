import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.searchMovies("The Matrix");
  }

  // Add a handleInputChange method that should be called whenever the user types into the input field. Inside of this method, set this.state.search equal to the new value of the input field. You can verify that you've completed this step correctly if you can now type into the input field.

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // Add a handleFormSubmit method that should be called when the form is submitted. Inside of this method, utilize the API module to search the OMDb API for the value of this.state.search. Then update this component's result state with the result. You can verify that you completed this step correctly by searching for the name of a movie. If successful, you should see the movie poster and some information about the movie appear in the left card.
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
