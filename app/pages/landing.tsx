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

            <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center  h-screen bg-center bg-cover" style={{ backgroundImage: 'url("/assets/bg1.jpg")' }}>
                <h1 className="text-5xl text-white font-serif">Welcome to BeatMarket</h1>
                <h2 className="italic text-2xl text-orange-500">The Best place to Find and Buy Beats</h2>
                <Button variant="destructive" className="mt-4" onClick={() => navigate('/signup')}>
                    Get Started 
                </Button>
            </div>
        </div>   

            {/* Top Artists Section */}
            <section className="bg-gray-100 py-16 mt-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Top Artists</h2>
                    {/* Add your content for Top Artists here */}
                </div>
            </section>

            {/* Trending Songs Section */}
            <section className="py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Trending Songs</h2>
                    {/* Add your content for Trending Songs here */}
                </div>
            </section>
        </div>   
     );
}

export default Landing;

// import React from 'react';
// import Slider from 'react-slick';
// import { Navbar } from '@/components/landingnavbar';
// import { Button } from '@/components/ui/button';
// import { useNavigate } from 'react-router-dom';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Landing = () => {
//     const navigate = useNavigate();

//     // Sample data for the carousel
//     const topArtistsData = [
//         { name: 'Artist 1', image: 'url-to-image1.jpg' },
//         { name: 'Artist 2', image: 'url-to-image2.jpg' },
//         // Add more artists as needed
//     ];

//     const trendingSongsData = [
//         { title: 'Song 1', artist: 'Artist 1', image: '/assets/bg1.jpg' },
//         { title: 'Song 2', artist: 'Artist 2', image: '/assets/gmail.png' },
//         // Add more songs as needed
//     ];

//     const renderCarouselItems = (data) => {
//         return data.map((item, index) => (
//             <div key={index}>
//                 <img src={item.image} alt={item.name || item.title} />
//                 {/* You can customize the content inside each carousel item */}
//                 {item.name && <p>{item.name}</p>}
//                 {item.title && <p>{item.title} by {item.artist}</p>}
//             </div>
//         ));
//     };

//     const carouselSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         // Add more settings as needed
//     };

//     return (
//         <div>
//             <Navbar />

//             <div className="justify-center items-center mt-72">
//                 <h1 className="text-5xl flex justify-center items-center font-serif">Welcome to BeatMarket</h1>
//                 <h2 className="text-lg flex justify-center items-center text-orange-500 mt-6">The Best place to Find and Buy Beats</h2>
//                 <Button variant="destructive" className="mx-auto justify-center flex items-center mt-11" onClick={() => navigate('/signup')}>
//                     Get Started
//                 </Button>
//             </div>

//             {/* Top Artists Section */}
//             <section className="bg-gray-100 py-16 mt-10">
//                 <div className="container mx-auto">
//                     <h2 className="text-3xl font-bold mb-6">Top Artists</h2>
//                     <Slider {...carouselSettings}>{renderCarouselItems(topArtistsData)}</Slider>
//                 </div>
//             </section>

//             {/* Trending Songs Section */}
//             <section className="py-16">
//                 <div className="container mx-auto">
//                     <h2 className="text-3xl font-bold mb-6">Trending Songs</h2>
//                     <Slider {...carouselSettings}>{renderCarouselItems(trendingSongsData)}</Slider>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Landing;

// import React from 'react';
// import { Navbar } from '@/components/landingnavbar';
// import { Button } from '@/components/ui/button';
// import { useNavigate } from 'react-router-dom';
// import bgImage from '../assets/bg2.jpg';

// const Landing = () => {
//     const navigate = useNavigate();
//     return ( 
//         <div>
//             <Navbar />
//             <div className="flex flex-col justify-center items-center  h-screen bg-center bg-cover" style={{ backgroundImage: 'url("/assets/bg1.jpg")' }}>
//                 <h1 className="text-5xl text-white font-serif">Welcome to BeatMarket</h1>
//                 <h2 className="text-2xl text-orange-500">The Best place to Find and Buy Beats</h2>
//                 <Button variant="destructive" className="mt-4" onClick={() => navigate('/signup')}>
//                     Get Started 
//                 </Button>
//             </div>
//         </div>   
//      );
// }
 
// export default Landing;