import { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { removeFromFav } from '../redux/actions'

const mapDispatchToProps = (dispatch) => ({
    removeFromFav: (f) => {
        dispatch(removeFromFav(f))
    },
})

class Favorites extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h1 className="heading">Here is your Favourites list</h1>
                    <Col xs={12}>
                        <ListGroup>
                            {this.props.favorites.elements.map((f, i) => (
                                <ListGroupItem key={i}>
                                    <StarFill onClick={() => this.props.removeFromFav(f)} style={{ marginRight: "20px" }} />
                                    <span>{f}</span>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect((s) => s, mapDispatchToProps)(Favorites)