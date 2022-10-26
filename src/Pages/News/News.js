import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const {_id, title, author, details, image_url, rating, total_view} = news;
    return (
        <Card className="text-center mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        thumbnail
                        className='me-2'
                        src={author?.img}
                        style={{height: '60px'}}
                    ></Image>
                    <div className='my-1 text-start'>
                        <p className='mb-0'>{author?.name}</p>
                        <p className='mb-0'>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark />
                    <FaShareAlt className='ms-2' />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2' />
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye />
                    <span className='ms-2'>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default News;