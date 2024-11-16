import { onAuthenticatedUser } from '@/actions/auth'
import { redirect } from 'next/navigation';
import React from 'react'

const page = async() => {
  const user=await onAuthenticatedUser();

  if(!user || !user.id) redirect("/sign-in");
  return (
    <>
    <div className='px-7 flex flex-col'>
      <h5 className='font-bold text-base text-themeTextWhite'>Payment Method</h5>
      <p className='text-themeTextGray leading-tight'>
      Free for 14 days, then $99/month. Cancel anytime.All features.Unlimited everything. No hidden fees
      </p>
      </div>
      
      </>
  )
}

export default page