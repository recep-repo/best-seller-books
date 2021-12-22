import {Card, ListGroupItem, ListGroup, CardGroup, Row} from "react-bootstrap"
import { useEffect, useState } from "react"

const Mycard = () => {
    const [lists, setLists] = useState([])

    useEffect(() => {
        fetch("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=SRGiUahAFriZugiVhQztGApyWfNiA2CR")
        .then(res => res.json())
        .then((data) => setLists(data.results.lists))
        .catch((err) => console.log(err))
    }, [])

    // CardGroup className="d-flex justfy-content-center" style={{ width: '18rem' }}

    return(
        <Row xs={1} md={6} className="g-4 d-flex justify-content-center mt-2 w-75 m-auto">
            {lists.map((list) => {
                return(
                    <div>
                        {list.books.map((book) => { 
                            const {book_image, title, description, list_id} = book
                            return(
                                <Card key={list_id} style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={book_image} />
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>{description}</Card.Text>
                                </Card>
                            )
                        })}
                    </div>
                )
            })}
        </Row>
    )
}

export default Mycard