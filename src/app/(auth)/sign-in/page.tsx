import SignInForm from '@/components/forms/sign-in'
import React from 'react'

const SignInPage = () => {
  return (
    <>
    <h5 className='font-bold text-base text-themeTextWhite'>Login</h5>
      <p className='text-themeTextGray leading-tight'>
      Network with people from around the world, join groups, create your own,
      watch courses and become the best version of yourself.
      </p>
      <SignInForm />
    </>
  )
}

export default SignInPage