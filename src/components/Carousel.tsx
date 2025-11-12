
import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"


interface Image {
    src: string,
    alt: string
}

function InteractiveCarousel({content}: {content: Image[]}) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
        return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

  return (
    <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
            {
                content.map( (elem: Image) => (
                    <CarouselItem className="flex justify-center">
                        <img src={elem.src} alt={elem.alt}/>
                    </CarouselItem>
                ))
            }
        </CarouselContent>
        <CarouselPrevious  className="max-sm:hidden hover:cursor-pointer hover:focus:bg-primary"/>
        <CarouselNext className="max-sm:hidden hover:cursor-pointer hover:focus:bg-primary"/>
        <div className="text-muted-foreground py-2 text-center text-sm">
            Slide {current} of {count}
        </div>
    </Carousel>
  )
}


export default InteractiveCarousel;