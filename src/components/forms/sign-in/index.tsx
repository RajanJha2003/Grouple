import { FormGenerator } from '@/components/global/form-generator'
import { GROUPLE_CONSTANTS } from '@/constants'
import React from 'react'

const SignInForm = () => {
  return (
    <form className='flex flex-col gap-3 mt-10'>
        {
            GROUPLE_CONSTANTS.signInForm.map((field)=>(
                <FormGenerator {...field} key={field.id}   />
            ))
        }

    </form>
  )
}

export default SignInForm