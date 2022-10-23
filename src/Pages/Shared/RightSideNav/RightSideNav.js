import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import {FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitch, FaTwitter, FaYoutube, FaDiscord, FaTeamspeak, FaNewspaper} from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube /> YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaDiscord /> Discord</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaNewspaper /> Privacy Policy</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTeamspeak /> Trams & Conditions</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-4'>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;