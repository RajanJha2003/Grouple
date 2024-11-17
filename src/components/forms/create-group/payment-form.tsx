import React from "react"

type Props = {
    userId: string
    affiliate: boolean
    stripeId?: string
}

const PaymentForm = ({ userId, affiliate, stripeId }: Props) => {
    return <div>PaymentForm</div>
}

export default PaymentForm
