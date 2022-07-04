import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Star, StarFill } from 'react-bootstrap-icons'
import { addToFav, removeFromFav } from '../redux/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (company) => dispatch(addToFav(company)),
    removeFromFavorites: (company) => dispatch(removeFromFav(company)),
})

const JobResult = ({
    data,
    favorites,
    addToFavorites,
    removeFromFavorites,
}) => {
    const isFav = favorites.includes(data.company_name)
    const toggleFavorite = () => {
        isFav
            ? removeFromFavorites(data.company_name)
            : addToFavorites(data.company_name)
    }

    return (
        <Row
            className="mx-0 mt-3 p-3"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}
        >
            <Col xs={4} className="d-flex justify-content-between">
                {isFav ? (
                    <StarFill
                        color="gold"
                        size={16}
                        className="me-4 my-auto"
                        onClick={toggleFavorite}
                    />
                ) : (
                    <Star
                        color="gold"
                        size={16}
                        className="me-4 my-auto"
                        onClick={toggleFavorite}
                    />
                )}
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={8}>
                <Link to={{ pathname: data.url }} target="_blank">
                    {data.title}
                </Link>
            </Col>
        </Row>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(JobResult)