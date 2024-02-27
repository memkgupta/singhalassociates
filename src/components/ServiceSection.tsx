import React from 'react'
import ServiceCard from './cards/ServiceCard'
import { Button } from './ui/moving-border'

function ServiceSection() {
  return (
 <div className='bg-slate-950 w-full text-white sm:pt-8 md:-translate-y-20  px-4'>
       <div className=' grid md:grid-cols-3 gap-4 grid-cols-1 justify-items-center'>
        <ServiceCard title='Taxes' src={"/taxes.png"} description={"Optimize your tax strategy with our expert consultation service. From individual filings to complex corporate tax planning, we provide personalized solutions to maximize returns and minimize liabilities"}/>
        <ServiceCard title='Audit Service' description='Our auditing service ensures financial integrity and regulatory compliance for businesses of all sizes. We meticulously examine financial records, transactions' src='/audit.png'/>
        <ServiceCard title='Planning' description='Maximize tax savings and minimize liabilities with our tailored tax planning service. Our expert team crafts personalized strategies aligned with your financial goals and the latest tax laws. From optimizing deductions and credits to strategic investment planning, we ensure compliance while maximizing your financial well-being. Trust us to navigate complex tax landscapes and empower you to make informed decisions for a brighter financial future' src='/planning.png'/>
    </div>

   <div className="flex justify-center mt-4">
   <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-white text-black dark:text-black cursor-pointer"
      >
      View More
      </Button>
   </div>
 </div>
  )
}

export default ServiceSection