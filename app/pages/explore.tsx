import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExpNavbar } from '@/components/explorenavbar';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

function Beat({ beat, isPaid }: { beat: any, isPaid: boolean }) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (audio && !isPaid) {
      const handleTimeUpdate = () => {
        if (audio.currentTime >= 30) {
          audio.pause();
          // Reset the audio time to 0
          audio.currentTime = 0;
          // handlePayment();
        }
      };
      audio.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [isPaid]);

  return (
    <div>
      <div className="mb-4">
        <img src={beat.imageUrl} className="rounded-md w-full h-32 object-cover" />
      </div>
      <h2 className="text-2xl flex justify-center items-center mb-[10%] font-bold">{beat.name}</h2>
      <h2 className="text-lg flex justify-center items-center mb-[5%] font-normal">{beat.producer}</h2>
      <audio ref={audioRef} controls src={beat.audioUrl}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export function Explore() {
  // Hardcoded beats data
  const beats = [
    { id: 1, name: 'Better Day', audioUrl: '/beats/better-day.mp3',producer:'Adiboy',imageUrl: '/assets/Better days.jpg' },
    { id: 2, name: 'Blade Main', audioUrl: '/beats/blade-main.mp3',producer:'ShaSha',imageUrl: '/assets/Blade men.jpg' },
    { id: 3, name: 'Sunrise Bliss', audioUrl: '/beats/sunrise-bliss.mp3',producer:'Mayu',imageUrl: '/assets/sunrise bliss.jpg' },
    { id: 4, name: 'Titanium', audioUrl: '/beats/titanium.mp3', producer:'Omi',imageUrl: '/assets/titanium.jpg'},
  ];

  return (
    <>
    <ExpNavbar />
    <div className="flex justify-center bg-slate-400">
      <Carousel className="w-lg max-w-xs flex flex-col mt-10">
        <CarouselContent className="flex flex-col">
          {beats.map((beat: any) => (
            <CarouselItem key={beat.id} className="flex-1">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Beat beat={beat} isPaid={false} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div></>
  );
}

export default Explore;

// import * as React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { ExpNavbar } from '@/components/explorenavbar';
// import { useNavigate } from 'react-router-dom';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// function Beat({ beat, isPaid }: { beat: any, isPaid: boolean }) {
//   const audioRef = React.useRef<HTMLAudioElement | null>(null);

//   React.useEffect(() => {
//     const audio = audioRef.current;
//     if (audio && !isPaid) {
//       const handleTimeUpdate = () => {
//         if (audio.currentTime >= 30) {
//           audio.pause();
//           // Reset the audio time to 0
//           audio.currentTime = 0;
//           // handlePayment();
//         }
//       };
//       audio.addEventListener('timeupdate', handleTimeUpdate);

//       return () => {
//         audio.removeEventListener('timeupdate', handleTimeUpdate);
//       };
//     }
//   }, [isPaid]);

//   return (
//     <div>
//       <div className="mb-4">
//         <img src={beat.imageUrl} className="rounded-md w-full h-32 object-cover" alt={beat.name} />
//       </div>
//       <h2 className="text-2xl flex justify-center items-center mb-[10%] font-bold">{beat.name}</h2>
//       <h2 className="text-lg flex justify-center items-center mb-[5%] font-normal">{beat.producer}</h2>
//       <audio ref={audioRef} controls src={beat.audioUrl}>
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// }

// export function Explore() {
//   // Hardcoded beats data
//   const beats = [
//     { id: 1, name: 'Better Day', audioUrl: '/beats/better-day.mp3', producer: 'Adiboy', imageUrl: '/assets/Better days.jpg', genre: 'Hip-Hop' },
//     { id: 2, name: 'Blade Main', audioUrl: '/beats/blade-main.mp3', producer: 'ShaSha', imageUrl: '/assets/Blade men.jpg', genre: 'Pop' },
//     { id: 3, name: 'Sunrise Bliss', audioUrl: '/beats/sunrise-bliss.mp3', producer: 'Mayu', imageUrl: '/assets/sunrise bliss.jpg', genre: 'Electronic' },
//     { id: 4, name: 'Titanium', audioUrl: '/beats/titanium.mp3', producer: 'Omi', imageUrl: '/assets/titanium.jpg', genre: 'R&B' },
//   ];

//   const navigate = useNavigate();

//   // Get unique genres from the beats data
//   const genres = [...new Set(beats.map((beat) => beat.genre))];

//   const handleGenreChange = (selectedGenre: string) => {
//     // Handle the genre change (e.g., filter beats based on the selected genre)
//     console.log(`Selected Genre: ${selectedGenre}`);
//   };

//   return (
//     <>
//       <ExpNavbar />
//       <div className="flex justify-center">
//         <div className="mt-4">
//           <label htmlFor="genreSelect" className="mr-2">
//             Select Genre:
//           </label>
//           <select id="genreSelect" onChange={(e) => handleGenreChange(e.target.value)}>
//             <option value="">All Genres</option>
//             {genres.map((genre) => (
//               <option key={genre} value={genre}>
//                 {genre}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <div className="flex justify-center mt-4">
//         <Carousel className="w-lg max-w-xs flex flex-col mt-4">
//           <CarouselContent className="flex flex-col">
//             {beats.map((beat: any) => (
//               <CarouselItem key={beat.id} className="flex-1">
//                 <div className="p-1">
//                   <Card>
//                     <CardContent className="flex aspect-square items-center justify-center p-6">
//                       <Beat beat={beat} isPaid={false} />
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </>
//   );
// }

// export default Explore;



