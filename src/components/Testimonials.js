import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../App.css'

const handleDragStart = (e) => e.preventDefault();

const items = [
    // <img  src="images/anmol.png"  role="presentation" alt='img' />,
    <div className="item active" onDragStart={handleDragStart}>
        <h2 className=' text-black font-bold text-3xl text-center'>MARY JAMES
        </h2>
        {/* <img src="images/home/anmol-web.png" alt=""> */}
        <p className=' text-black font-light  p-5 text-base text-justify  '> I am a mother, and I want to share my experience with all of you. My name is Mary, and I'm living in Texas. Two years ago, I was looking for a good school for my daughter. I came across the Mayo College Girls School website, and that's when I found the perfect school for her. The teachers at Mayo College Girls School are very nice and experienced in their field, which is why it made me feel at ease that my daughter was in such good hands.
            Mayo College Girls School was a life-changing experience for my daughter. She came out independent, confident, and excited to start a new chapter of her life. I would recommend Mayo College Girls School to any parent looking to help their daughter shape the next stage of her life.

        </p>
    </div>,
    // <img src="images/Madhu.png"  role="presentation"  alt='img'/>,
    // <div className="item" onDragStart={handleDragStart}>
    //     <h2 className=' text-light text-center '> Madhu Singh</h2>
    //     {/* <img src="images/home/Madhu-web.png" alt=""> */}
    //     <p className=' text-light testimonial-para' style={{
    //         textAlign: 'justify',
    //         textJustify: 'interWord',

    //     }}> The Welham Girls School has enriched my daughter in innumerable ways.  I made my choice based on the potential of what my daughter would achieve as a student at Welham. She is both happy and motivated to attend school. The school provides the best learning environment, which is very important for the overall development of my daughter</p>
    // </div>,
    // // <img src="images/Ankita.png"  role="presentation"  alt='img'/>,
    // <div className="item" onDragStart={handleDragStart}>
    //     <h2 className=' text-light text-center '>Ankita Mishra</h2>
    //     {/* <img src="images/home/Ankita-web.png" alt=""> */}
    //     <p className=' text-light testimonial-para' style={{
    //         textAlign: 'justify',
    //         textJustify: 'interWord',

    //     }}>My journey at Welham Girls School was full of exposure. From the beginning, I knew that the school was different, and I wanted to be a part of it. There were many opportunities for me to explore my interests and passions, and to learn new things. I was able to take part in many extracurricular activities, including sports, student government, clubs, tutoring and mentoring programs, and more.
    //     </p>
    // </div>
];
function Testimonials() {
    return (



        <div className=' '>
            <div className="title-head bg-[#990000]  p-8"> <span className='container mx-auto px-4 text-white text-3xl font-bold'>TESTIMONIALS</span></div>

            <div className="hidden-mobile hidden-mobile2  md:my-0 ">
                <section className="testimonial-section sec-padt centred  ">
                    <div className="container">
                        <div className="testimonial-title white">


                            {/* <div className="section-title-testimonial"> */}
                            <div>
                                <AliceCarousel className="" mouseTracking items={items}
                                     />

                            </div>
                        </div>
                    </div>

                    {/* </div>   */}
                </section></div>
        </div>

    )
}

export default Testimonials