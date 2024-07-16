import React from 'react'




export default function Home() {
  
  return (
  <>
 <div className="flex w-4/5 justify-between mt-36 mx-auto items-center">
  <div className="flex flex-col items-center">
    <h1 style={{fontSize:'25px'}}>Transcript</h1>
    <div className="w-60vh bg-black h-20vh rounded-3xl"></div>
    <h1 style={{fontSize:'25px'}} className='mt-10'>Translation</h1>
    <div className="w-60vh bg-black h-20vh rounded-3xl "></div>
  </div>

  <iframe
    width="500"
    height="300"
    src="https://www.youtube.com/embed/ykG8dVplZ_g?si=QXPbhUiw-rxysBGe"
    className="ml-5">
  </iframe>
</div>
</>
)
}
