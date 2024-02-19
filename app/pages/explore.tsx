import * as React from "react"
// import axios from "axios";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

  // Component to display a beat
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
        <h2 className="text-2xl flex justify-center items-center mb-[20%] font-bold">{beat.name}</h2>
        <audio ref={audioRef} controls src={beat.audioUrl}>
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
                    <Beat beat={beat} isPaid={false} />
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