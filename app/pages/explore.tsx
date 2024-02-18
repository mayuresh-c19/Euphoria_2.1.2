// import React from 'react';

// // Component to display a beat
// function Beat({ beat }: { beat: any }) {
//     return (
//         <div>
//             <h2>{beat.name}</h2>
//             <audio controls src={beat.audioUrl}>
//                 Your browser does not support the audio element.
//             </audio>
//         </div>
//     );
// }

// // Main Explore component
// const Explore = () => {
//   // Hardcoded beats data
//   const beats = [
//     { id: 1, name: 'Better Day', audioUrl: '/beats/better-day.mp3' },
//     { id: 2, name: 'Blade Main', audioUrl: '/beats/blade-main.mp3' },
//     { id: 3, name: 'Sunrise Bliss', audioUrl: '/beats/sunrise-bliss.mp3' },
//     { id: 4, name: 'Titanium', audioUrl: '/beats/titanium.mp3' },
//   ];

//   return (
//     <div>
//         {beats.map((beat: any) => (
//             <Beat key={beat.id} beat={beat} />
//         ))}
//     </div>
//   );
// }
 
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Component to display a beat
function Beat({ beat }: { beat: any }) {
    return (
        <div>
            <h2>{beat.name}</h2>
            <audio controls src={beat.audioUrl}>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

export function Explore() {
  // Hardcoded beats data
  const beats = [
    { id: 1, name: 'Better Day', audioUrl: '/beats/better-day.mp3' },
    { id: 2, name: 'Blade Main', audioUrl: '/beats/blade-main.mp3' },
    { id: 3, name: 'Sunrise Bliss', audioUrl: '/beats/sunrise-bliss.mp3' },
    { id: 4, name: 'Titanium', audioUrl: '/beats/titanium.mp3' },
  ];

  return (
    <div className="flex justify-center">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {beats.map((beat: any) => (
            <CarouselItem key={beat.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Beat beat={beat} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Explore;