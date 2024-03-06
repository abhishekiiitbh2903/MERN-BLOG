import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to know more about Me?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my Portfolio
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://meabhisingh.netlify.app/" target='_blank' rel='noopener noreferrer'>
                    Abhishek Singh Rathore
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://img.freepik.com/free-photo/revenue-operations-collage_23-2150847854.jpg?w=740&t=st=1709752947~exp=1709753547~hmac=56dc2e21c54276bd85a38f6361609311c9e829610f3238f465b99903a01a06e0" />
        </div>
    </div>
  )
}