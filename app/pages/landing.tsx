import React from 'react';
import { Navbar } from '@/components/landingnavbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg2.jpg';

const Landing = () => {
    const navigate = useNavigate();
    return ( 
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center mt-72 h-screen bg-center bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
                <h1 className="text-5xl font-serif">Welcome to BeatMarket</h1>
                <h2 className="text-lg text-orange-500">The best place to find and buy beats</h2>
                <Button variant="destructive" className="mt-4" onClick={() => navigate('/signup')}>
                    Get Started 
                </Button>
            </div>
        </div>   
     );
}
 
export default Landing;