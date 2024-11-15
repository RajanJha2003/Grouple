"use client";

import { Button } from '@/components/ui/button'
import React from 'react'
import { Loader } from '../loader'
import { Google } from '@/icons'
import { useGoogleAuth } from '@/hooks/authentication'

type GoogleAuthButtonProps={
    method:"signup" | "signin"
}

const GoogleAuthButton = ({method}:GoogleAuthButtonProps) => {
    const { signUpWith, signInWith } = useGoogleAuth()
    return (
      <Button
        {...(method === "signin"
          ? {
              onClick: () => signInWith("oauth_google"),
            }
          : {
              onClick: () => signUpWith("oauth_google"),
            })}
        className="w-full rounded-2xl flex gap-3 bg-themeBlack border-themeGray"
        variant="outline"
      >
    <Loader loading={false}>
        <Google />
        Google
    </Loader>

   </Button>
  )
}

export default GoogleAuthButton