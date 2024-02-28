import Image from 'next/image'
import React from 'react'

function WhyChooseUs() {
  return (
    <div className='bg-slate-950 flex flex-col w-full  p-5'>
<p className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 text-center to-neutral-400 bg-opacity-50">Clients Choose Us For</p>
 
 <div className="grid gap-4 mt-8 md:px-24 px-8">
  {/* Expertise */}
  <div className="md:flex grid gap-y-5  justify-between">
<div className="grid gap-y-4 content-start">
<div className="flex gap-4 ">
<p className="text-3xl max-w-12 md:text-5xl text-white font-bold font-Protest ">1.</p>
<p className="text-3xl md:text-5xl sm:col-span-2 text-white font-bold  ">Expertise</p>

</div>
<p className="vsm:hidden md:block  max-w-[500px]  text-md font-light text-gray-300 ">
Our team comprises seasoned tax professionals with years of experience and in-depth knowledge of tax laws and regulations
</p>
</div>
<div className="grid">
<Image src={"/expertise.jpg"} alt='Expertise' className=' mt-3 rounded-md shadow-md shadow-gray-800' width={400} height={400} />
<div className='text-[10px] text-gray-400'>
<a href="https://www.freepik.com/free-vector/think-out-box-concept-open-your-brain-look-new-ideas-that-will-drive-your-business-work-creativity-help-see-business-opportunity-vision-idea-discover-new-solution_21586017.htm#fromView=search&page=1&position=16&uuid=07fbd8b3-9e39-42b9-ae2a-dcca07db7f85">Image by jcomp on Freepik</a>
</div>
</div>
<p className="md:hidden text-md font-light text-gray-300 text-pretty">
Our team comprises seasoned tax professionals with years of experience and in-depth knowledge of tax laws and regulations
</p>
  </div>
  {/* Personalized Service */}
  <div className="md:flex grid gap-5  justify-between">
<div className="grid gap-y-4 content-start">
<div className="flex gap-4">
<p className="text-3xl max-w-12 md:text-5xl text-white font-bold font-Protest ">2.</p>
<p className="text-3xl md:text-5xl sm:col-span-2 text-white font-bold  ">Personalized Service</p>

</div>
<p className="vsm:hidden md:block col-span-3 max-w-[500px]  text-md font-light text-gray-300 text-pretty">
Our team comprises seasoned tax professionals with years of experience and in-depth knowledge of tax laws and regulations
</p>
</div>
<div className="grid">
<Image src={"/personalized_service.jpg"} alt='Expertise' className=' mt-3 rounded-md shadow-md shadow-gray-800' width={400} height={400} />
<div className='text-[10px] text-gray-500'>
Image by <a href="https://www.freepik.com/free-photo/human-resources-concept-with-man_42089121.htm#query=personalized%20service&position=6&from_view=keyword&track=ais&uuid=509fcb25-0df3-42cc-bdad-76177c74716b">Freepik</a>
</div>
</div>
<p className="md:hidden text-md font-light text-gray-300 text-pretty">
Our team comprises seasoned tax professionals with years of experience and in-depth knowledge of tax laws and regulations
</p>
  </div>
  {/* Commitment to Excellence */}
  <div className="md:flex grid gap-5  justify-between">
<div className="grid gap-y-4 content-start">
<div className="flex gap-4">
<p className="text-3xl max-w-12 md:text-5xl text-white font-bold font-Protest ">3.</p>
<p className="text-3xl md:text-5xl sm:col-span-2 text-white font-bold  ">Commitment to Excellence</p>

</div>
<p className="vsm:hidden md:block col-span-3 max-w-[500px]  text-md font-light text-gray-300 text-pretty">
We understand that every client is unique, so we tailor our solutions to meet your specific needs and goals.
</p>
</div>
<div className="grid">
<Image src={"/commitment.jpg"} alt='Commitment' className=' mt-3 rounded-md shadow-md shadow-gray-800' width={400} height={400} />
<div className='text-[10px] text-gray-500'>
<a href="https://www.freepik.com/free-photo/two-businessman-shake-hand-coffee-shop_3805659.htm#fromView=search&page=1&position=2&uuid=df711d24-940d-4bdc-8c28-cd84a950d34e">Image by jcomp on Freepik</a>
</div>
</div>
<p className="md:hidden text-md font-light text-gray-300 text-pretty">
We are dedicated to delivering exceptional service and achieving the best possible outcomes for our clients.
</p>
  </div>
 </div>
 
    </div>
  )
}

export default WhyChooseUs