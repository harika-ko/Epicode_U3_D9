import { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import JobResult from './JobResult'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchJobs } from '../redux/actions'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: (baseEndpoint, query) => dispatch(fetchJobs(baseEndpoint, query)),
})


class MainSearch extends Component {
  state = {
    query: '',
  }

  baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.props.fetchJobs(this.baseEndpoint, this.state.query)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Remote Jobs Search</h1>
            <Link to="/favorites" className="btn btn-dark">
              Favorites
            </Link>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="Type and press Enter"
              />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {this.props.jobs.elements.map((jobData) => (
              <JobResult key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch)
