"use client";

import { Loader } from "@/components/global/loader"
import { usePayments } from "@/hooks/payment"
import dynamic from "next/dynamic";
import React from "react"

type Props = {
    userId: string
    affiliate: boolean
    stripeId?: string
}

const GroupList = dynamic(
    () =>
      import("@/components/global/group-list-slider").then(
        (component) => component.default,
      ),
    {
      ssr: false,
    },
  )

const PaymentForm = ({ userId, affiliate, stripeId }: Props) => {
    const {
        onCreateGroup,
        isPending,
        register,
        errors,
        isCategory,
        creatingIntent,
      } = usePayments(userId, affiliate)
    return (
      <Loader loading={creatingIntent}>
        <form className="pt-5" onSubmit={onCreateGroup}>
        <GroupList
          selected={isCategory}
          register={register}
          label="Select Category"
          slidesOffsetBefore={28}
        />

        </form>

      </Loader>
    )
}

export default PaymentForm
