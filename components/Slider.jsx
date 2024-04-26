import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@components/ui/carousel"


function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
function ChevronLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}
export default function Component() {
    return (
        <>
            <section className="relative w-full h-[600px] md:h-[700px] lg:h-[600px]  overflow-hidden">
                <Carousel
                    autoPlay={{
                        delay: 3000,
                        loop: true,
                    }}
                    className="w-full h-full "
                >
                    <CarouselContent>
                        <CarouselItem>
                            
                            <video className="w-full h-full object-cover" controls autoplay loop>
                                <source src="/baahubali.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div class="info-overlay  rounded-lg ">
                                <span className="object-cover w-full h-full rounded-md bg-muted">
                                    <div>
                                        <h1 className="text-3xl font-bold mb-2">Baahubali: The Beginning</h1>
                                        <div className="flex items-center space-x-4 text-gray-100 dark:text-gray-300">
                                            <div>8.2</div>
                                            <div>2015</div>
                                            <div>2h 28m</div>
                                            <div>Action  Drama</div>
                                        </div>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                        <div>
                                        
                                            <br />
                                            <span className="font-medium">Cast: </span>
                                            Prabhas , Rana Daggubati , Anushka Shetty , Tamannaah Bhatia{"\n                    "}
                                        </div>
                                        <div>
                                            <span className="font-medium">Director: </span>
                                            S.S. Rajamouli{"\n                    "}
                                        </div>
                                    </div>
                                 
                                </span> 
                            </div>     
                            
                        </CarouselItem>
                        <CarouselItem>
                            
                            <video className="w-full h-full " controls autoplay loop>
                                <source src="/baahubali.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* <div class="info-overlay  rounded-lg ">
                                <span className=" w-full h-full rounded-md bg-muted">
                                    <div>
                                        <h1 className="text-3xl font-bold mb-2">Vikram Vedha</h1>
                                        <div className="flex items-center space-x-4 text-gray-100 dark:text-gray-300">
                                            <div>8.2</div>
                                            <div>2010</div>
                                            <div>2h 28m</div>
                                            <div>Action  Crime  Drama</div>
                                        </div>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                        <div>
                                        
                                            <br />
                                            <span className="font-medium">Cast: </span>
                                            Madhavan , Vijay Sethupathi , Shraddha Srinath , Kathir{"\n                    "}
                                        </div>
                                        <div>
                                            <span className="font-medium">Director: </span>
                                            Gayatri{"\n                    "}
                                        </div>
                                    </div>
                                 
                                </span> 
                            </div>      */}
                            
                        </CarouselItem>
                        <CarouselItem>
                        <video className="w-full h-full object-cover" controls autoplay loop>
                                <source src="/vikramvedha.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* <div class="info-overlay  rounded-lg ">
                                <span className="object-cover w-full h-full rounded-md bg-muted">
                                    <div>
                                        <h1 className="text-3xl font-bold mb-2">Vikram Vedha</h1>
                                        <div className="flex items-center space-x-4 text-gray-100 dark:text-gray-300">
                                            <div>8.2</div>
                                            <div>2010</div>
                                            <div>2h 28m</div>
                                            <div>Action  Crime  Drama</div>
                                        </div>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                        <div>
                                        
                                            <br />
                                            <span className="font-medium">Cast: </span>
                                            Madhavan , Vijay Sethupathi , Shraddha Srinath , Kathir{"\n                    "}
                                        </div>
                                        <div>
                                            <span className="font-medium">Director: </span>
                                            Gayatri{"\n                    "}
                                        </div>
                                    </div>
                                 
                                </span> 
                            </div>  */}
                        </CarouselItem>
                        <CarouselItem>
                        <video className="w-full h-full object-cover" controls autoplay loop>
                                <source src="/vikramvedha.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* <div class="info-overlay  rounded-lg ">
                                <span className="object-cover w-full h-full rounded-md bg-muted">
                                    <div>
                                        <h1 className="text-3xl font-bold mb-2">Vikram Vedha</h1>
                                        <div className="flex items-center space-x-4 text-gray-100 dark:text-gray-300">
                                            <div>8.2</div>
                                            <div>2010</div>
                                            <div>2h 28m</div>
                                            <div>Action  Crime  Drama</div>
                                        </div>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                        <div>
                                        
                                            <br />
                                            <span className="font-medium">Cast: </span>
                                            Madhavan , Vijay Sethupathi , Shraddha Srinath , Kathir{"\n                    "}
                                        </div>
                                        <div>
                                            <span className="font-medium">Director: </span>
                                            Gayatri{"\n                    "}
                                        </div>
                                    </div>
                                 
                                </span> 
                            </div>  */}
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 text-white hover:text-gray-300 transition-colors">
                        <ChevronLeftIcon className="h-8 w-8" />
                    </CarouselPrevious>
                    <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 text-white hover:text-gray-300 transition-colors">
                        <ChevronRightIcon className="h-8 w-8" />
                    </CarouselNext>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4" />
                </Carousel>
            </section>
            
        </>
    )
}
