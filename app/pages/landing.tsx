// import React from 'react';
// import { Navbar } from '@/components/landingnavbar';
// import { Button } from '@/components/ui/button';
// import { useNavigate } from 'react-router-dom';

// const Landing = () => {
//     const navigate = useNavigate();
//     return ( 
//         <div>
//             <Navbar />
//             <div className="justify-center items-center mt-72 ">
//                         <h1 className="text-5xl flex justify-center items-center font-serif">Welcome to BeatMarket</h1>
//                         <h2 className="text-lg flex justify-center items-center text-orange-500">The Best place to Find and Buy Beats</h2>
//                         <Button variant="destructive" className="mx-auto justify-center flex items-center" onClick={() => navigate('/signup')}>
//                             Get Started 
//                         </Button>

//             </div>
//             </div>   
//      );
// }
 
// export default Landing;

// import React from 'react';
// import { Navbar } from '@/components/landingnavbar';
// import { Button } from '@/components/ui/button';
// import { useNavigate } from 'react-router-dom';

// const Landing = () => {
//     const navigate = useNavigate();
    
//     // Replace 'your-image-url.jpg' with the actual path or URL of your image
//     const backgroundImage = 'url("../assets/bg1.jpg")';

//     return ( 
//         <div className="bg-cover bg-center h-screen mt-auto" style={{ backgroundImage }}>
//             <Navbar />
//             <div className="flex flex-col justify-center items-center mt-72">
                
//                 <   Image src="../assets/bg1.jpg" alt="Background Image" className="max-w-full" />
//                 <h1 className="text-5xl flex justify-center items-center font-serif">Welcome to BeatMarket</h1>
//                 <h2 className="text-lg flex justify-center items-center text-orange-500">The Best place to Find and Buy Beats</h2>
//                 <Button variant="destructive" className="mx-auto mt-4" onClick={() => navigate('/signup')}>
//                     Get Started 
//                 </Button>
//             </div>
//         </div>
//     );
// }

// export default Landing;

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