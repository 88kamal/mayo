import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import '../App.css'

function Studentlife() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <Layout className="  ">

    <div className='  bg-[#990000] w-full h-[120em]  '>
      <div className='container mx-auto '>
        <div className=' flex justify-center'>
          <img class="md:max-w-[100%] max-w-[90%] h-auto my-[92px] md:my-[139px]" src="img/Pasted Graphic.jpg" alt="image description" />
        </div>
      </div>
      <div className=' -mt-[4em]'>
          {/* how to register  */}
      <div className=" bg-white p-8 md:p-14">
        <div className=' container mx-auto '>
          <div>
            <h1 className=' uppercase text-3xl mb-6 font-bold'>Student<span className='text-[#990000]'>Life</span></h1>
            <h2 className='mb-6 font-medium text-2xl uppercase'>About Student Life

</h2>
            <p className='mb-6 leading-relaxed text-justify'>
            MCGS is a great place to be a student. The student life culture is very rich, diverse, and influential. It is one of the main reasons why parents choose MCGS.

The school offers programs that are designed to help students succeed in the classroom and beyond.
The MCGS community is made up of students from all over India, who come together to learn and grow. They have a rich history and set of traditions that help them build strong relationships with one another. The students here are very social and friendly. We all have different interests, but the one thing that brings us together is our love for sports and academics.

MCGS is a private, co-educational high school located in the heart of Ashland, Oregon. The school was founded in 2007 by parents and educators who wanted their children to have an exceptional education that was rooted in academic excellence and a love for learning. MCGS students are challenged to explore their interests and develop their talents through a rigorous academic program, which includes Advanced Placement courses, honours classes, and electives.

The faculty members are committed to helping each student succeed. They guide students through the process of learning while encouraging them to take responsibility for their education. The teachers strive to foster a love of learning. There are always activities going on at MCGS to keep the students occupied outside of class time. For example, there are clubs to polish student hobbies

Here at MCGS, you will find an environment that fosters intellectual curiosity and encourages independent thinking while also offering opportunities for personal growth through participation in activities like sports teams, music programs, theatre productions, art gallery shows or community service projects. They believe that students learn best when they are engaged in real-world situations where they can apply what they have learned from their classroom studies.

</p>
          </div>
          
        </div>
      </div>
      {/* Assessment of proficiency */}
      <div className=" bg-[#990000] p-8 md:p-14">
        <div className=' container mx-auto '>
          <div>
            <h1 className=' uppercase text-lg md:text-2xl mb-6 font-medium text-white'>National Cadet Corps
</h1>
           <p className='mb-6 leading-relaxed text-justify text-white'>
           Mayo College Girls School is a unique educational institution that offers holistic education and an environment for learning where a child’s potential is nurtured. The Best Girls Boarding School in India prepares girls to become responsible citizens and leaders in their communities, with the ability to think critically, communicate effectively, work collaboratively and make ethical decisions. 
Mayo College Girls School believes that women are critical agents of change who can transform our world for the better. Career counselling is an essential part of the school curriculum. It helps students to understand what they need to study to get a job in the future.
It also helps them find out what kind of jobs intrigue them. With career counselling, students can make informed choices about their future careers and help them decide what course they should take at university or college.
Career counselling in Mayo College Girls can also help students find the jobs available and how much money they can earn from working these jobs.
Successful careers require skills, knowledge and experience through education and training. Career counselling helps students to identify their strengths, weaknesses and abilities so that they can plan for future careers based on their interests and preferences as well as the current economic needs of society.


           </p>
          </div>
        </div>
      </div>

      {/* Admittance Documents Required */}
      <div className=" bg-white p-8 md:p-14">
        <div className=' container mx-auto '>
          <div>
            <h1 className=' uppercase text-lg md:text-2xl mb-6 font-medium '>Academic Facilities
</h1>
<p className='mb-6 leading-relaxed text-justify'>
The MCGS campus is located in a tranquil, spacious and green environment. It has a sports complex with facilities for indoor and outdoor games, which are used by students as well as staff. The grounds also have an open-air auditorium and a cafeteria.
There are many facilities available for sports and games at MCGS.
The main sports facilities include:


</p>
            <ul className='list-disc list-inside'>
              <li className='mb-5 text-lg'>     An indoor badminton court with eight tables
              </li>
              <li className='mb-5 text-lg'>     A basketball court with basket and ball.
              </li>
              <li className='mb-5 text-lg'>     A chess board, which can be used for both chess and checkers.

              </li>
              <li className='mb-5 text-lg'>     A table to play board games such as Ludo etc

              </li>
         

            </ul>
          </div>
        </div>
      </div>

      <div className=" bg-[#990000] p-8 md:p-14">
        
       
      </div>
      </div>
    
    </div>
  </Layout>
  )
}

export default Studentlife