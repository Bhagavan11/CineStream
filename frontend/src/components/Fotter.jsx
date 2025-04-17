import React from 'react'

const Fotter = () => {
  return (
   <footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
    <div className='flex flex-col items-center justify-start gap-4 md:h-24 md:flex-row'>
        <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
            Build by{" "}
            <a href='https://www.linkedin.com/in/bhagavan-porapu-26a696289/' className='font-medium underline underline-offset-4'>BHAGAVAN</a>
            . The Source code is available on{" "}
            <a href='https://github.com/Bhagavan11/Netflix-Clone' className='font-medium underline underline-offset-4'>GitHub</a>

        </p>
    </div>

   </footer>
  )
}

export default Fotter
