import React from 'react'

export default function About() {
  return (
<div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Abhi's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Introducing Abhi's Blog, an endeavor birthed by the innovative mind of Abhishek Singh Rathore. A fervent developer with an insatiable thirst for knowledge, Abhishek pens his musings on technology, coding, and the intricacies that lie within
            </p>

            <p>
            Delve into our blog for weekly deep dives and tutorials spanning web development, data structures, algorithms, and programming languages. Abhishek perpetually navigates uncharted technological waters, ensuring you're abreast of the cutting-edge
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}