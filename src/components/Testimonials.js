import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../App.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
    <div onDragStart={handleDragStart}>
        <h2 className=' text-white font-bold text-3xl text-center'>MARY JAMES
        </h2>
        <p className=' text-white  p-5 text-base text-justify  '> I am a mother, and I want to share my experience with all of you. My name is Mary, and I'm living in Texas. Two years ago, I was looking for a good school for my daughter. I came across the Mayo College Girls School website, and that's when I found the perfect school for her. The teachers at Mayo College Girls School are very nice and experienced in their field, which is why it made me feel at ease that my daughter was in such good hands.
            Mayo College Girls School was a life-changing experience for my daughter. She came out independent, confident, and excited to start a new chapter of her life. I would recommend Mayo College Girls School to any parent looking to help their daughter shape the next stage of her life.

        </p>
    </div>,
    <div onDragStart={handleDragStart}>
        <h2 className=' text-white font-bold text-3xl text-center uppercase'> Shraddha Singh </h2>
        <p className=' text-white  p-5 text-base text-justify  '> Mayo College Girls School was a life-changing experience for my younger sister. The teachers at this school are very passionate about their work and the students. They make sure that each student gets attention and love from the teachers. My sister feels happy and confident in this environment. She has become a lot more independent and responsible here, she never had any trouble with her studies, and the teachers are there to help her with anything she needs. I am very glad that she was accepted at Mayo College Girls School
        </p>
    </div>,
    <div onDragStart={handleDragStart}>
        <h2 className=' text-white font-bold text-3xl text-center uppercase'> Trinetra Trivedi </h2>
        <p className=' text-white  p-5 text-base text-justify '> Mayo College Girls School was a life-altering experience for me. I became more confident, participated in sports and got involved with the local community, learned about healthy living, and got involved in clubs that I never would have considered before at other schools. I spent an amazing year at MCGS, and am so glad that I had the opportunity to go back as an alumnus.
            I am still in contact with my friends from Mayo College Girls School and they are doing amazing things.

        </p>
    </div>
]


function Testimonials() {
    return (



        <div className=' '>

            <div className="title-head bg-[#990000]  p-8"> <span className='container  px-4 text-white text-3xl font-bold '>TESTIMONIALS</span>
            </div>

            <div className="hidden-mobile hidden-mobile2  md:my-0 ">
                <section className="testimonial-section sec-padt centred flex justify-center   ">
                    <div className="container testi__center">
                        <div className="testimonial-title white">
                            <div className="item active mt-[26px]" onDragStart={handleDragStart}>
                                {/* <h2 className=' text-black font-bold text-3xl text-center'>MARY JAMES
                                </h2>
                                <p className=' text-black font-light my-5   text-base text-justify  '> I am a mother, and I want to share my experience with all of you. My name is Mary, and I'm living in Texas. Two years ago, I was looking for a good school for my daughter. I came across the Mayo College Girls School website, and that's when I found the perfect school for her. The teachers at Mayo College Girls School are very nice and experienced in their field, which is why it made me feel at ease that my daughter was in such good hands.
                                    Mayo College Girls School was a life-changing experience for my daughter. She came out independent, confident, and excited to start a new chapter of her life. I would recommend Mayo College Girls School to any parent looking to help their daughter shape the next stage of her life.

                                </p> */}
                                <AliceCarousel className="" mouseTracking items={items}
                                    autoPlay
                                    infinite
                                    autoPlayInterval="4000"
                                    autoPlayStrategy="none"
                                    disableButtonsControls />
                            </div>
                            {/* <items/> */}

                            {/* <div className="section-title-testimonial"> */}
                            {/* <div>
                                <AliceCarousel className="" mouseTracking items={items}
                                     />

                            </div> */}
                        </div>
                    </div>

                    {/* </div>   */}
                </section></div>
        </div>

    )
}

export default Testimonials