import React from 'react';
import { Navbar } from '@/components/landingnavbar';
import { Button } from '@/components/ui/button';


const Landing = () => {
    return ( 
        <div>
            <Navbar />
            <div className="justify-center items-center grid mt-72">
                        <h1 className="text-3xl flex font-bold ">Welcome to BeatMarket</h1>
                        <h2 className="text-lg flex justify-center items-center">The best place to find and buy beats</h2>
                        <Button variant="destructive" className="mx-auto justify-center flex items-center">
                            Get Started 
                        </Button>   
            </div>
                
        </div>
     );
}
 
export default Landing;