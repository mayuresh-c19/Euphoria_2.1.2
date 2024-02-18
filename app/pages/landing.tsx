import React from 'react';
import { Navbar } from '@/components/landingnavbar';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';



const Landing = () => {
    const navigate = useNavigate();
    return ( 
        <div>
            <Navbar />
            <div className="justify-center items-center mt-72 bg-cover bg-center h-screen" style={{ backgroundImage: 'url("bg1.jpg")' }}>
                        <h1 className="text-5xl flex justify-center items-center font-serif">Welcome to BeatMarket</h1>
                        <h2 className="text-lg flex justify-center items-center text-orange-500">The best place to find and buy beats</h2>
                        <Button variant="destructive" className="mx-auto justify-center flex items-center" onClick={() => navigate('/signup')}>
                            Get Started 
                        </Button>

            </div>
            </div>   
     );
}
 
export default Landing;