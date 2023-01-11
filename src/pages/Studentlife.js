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
<br/>
<br/>
MCGS is a private, co-educational high school located in the heart of Ashland, Oregon. The school was founded in 2007 by parents and educators who wanted their children to have an exceptional education that was rooted in academic excellence and a love for learning. MCGS students are challenged to explore their interests and develop their talents through a rigorous academic program, which includes Advanced Placement courses, honours classes, and electives.
<br/>
<br/>
The faculty members are committed to helping each student succeed. They guide students through the process of learning while encouraging them to take responsibility for their education. The teachers strive to foster a love of learning. There are always activities going on at MCGS to keep the students occupied outside of class time. For example, there are clubs to polish student hobbies
<br/>
<br/>
Here at MCGS, you will find an environment that fosters intellectual curiosity and encourages independent thinking while also offering opportunities for personal growth through participation in activities like sports teams, music programs, theatre productions, art gallery shows or community service projects. They believe that students learn best when they are engaged in real-world situations where they can apply what they have learned from their classroom studies.

</p>
          </div>
          
        </div>
      </div>
     
     
      </div>
    
    </div>
  </Layout>
  )
}

export default Studentlife