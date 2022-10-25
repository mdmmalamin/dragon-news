import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({news}) => {
    const {_id, title, author, details, image_url, total_vieew} = news;
    console.log(news);
    return (
        <Card className="text-center mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        thumbnail
                        className='me-2'
                        src={author.img}
                        style={{height: '60px'}}
                    ></Image>
                    <div className='my-1 text-start'>
                        <p className='mb-0'>{author.name}</p>
                        <p className='mb-0'>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 120 ? 
                        <p>{details.slice(0, 120) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                        :
                        <p>{details}</p>
                    }
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;