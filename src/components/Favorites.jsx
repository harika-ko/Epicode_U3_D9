import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromFav } from '../redux/actions'


const Favorites = () => {

    const dispatch = useDispatch()
    const favorites = useSelector((s) => s.favorites)

    return (
        <Container>
            <Row>
                <h1 className="heading">Here is your Favourites list</h1>
                <Col xs={12}>
                    <ListGroup>
                        {favorites.elements.map((f, i) => (
                            <ListGroupItem key={i}>
                                <StarFill onClick={() => dispatch(removeFromFav(f))} style={{ marginRight: "20px" }} />
                                <span>{f}</span>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}


export default Favorites