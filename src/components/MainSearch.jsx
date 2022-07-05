import { Container, Row, Col, Form } from 'react-bootstrap'
import JobResult from './JobResult'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchJobs } from '../redux/actions'
import { useState } from 'react'

const MainSearch = () => {
  const [query, setQuery] = useState("")

  const jobs = useSelector((s) => s.jobs)
  const dispatch = useDispatch()


  let baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(fetchJobs(baseEndpoint, query))
  }


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
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.elements.map((jobData) => (
            <JobResult key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}


export default MainSearch
