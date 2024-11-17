import { onAuthenticatedUser } from '@/actions/auth'
import { ongetGroupChannels, onGetGroupInfo, onGetGroupSubscriptions, onGetUserGroups } from '@/actions/groups'
import { QueryClient } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import React from 'react'

type Props={
    children:React.ReactNode,
    params:{
        groupid:string
    }
}

const GroupLayout = async({children,params}:Props) => {

    const query=new QueryClient();

    const user=await onAuthenticatedUser();
    if(!user.id) redirect("/sign-in");

    await query.prefetchQuery({
        queryKey:["group-info"],
        queryFn:()=>onGetGroupInfo(params.groupid)
    })


    await query.prefetchQuery({
        queryKey:["user-groups"],
        queryFn:()=>onGetUserGroups(user.id as string)
    })


    await query.prefetchQuery({
        queryKey:["group-channels"],
        queryFn:()=>ongetGroupChannels(params.groupid)
    })

    await query.prefetchQuery({
        queryKey:["group-subscriptions"],
        queryFn:()=>onGetGroupSubscriptions(params.groupid)
    })

    
  return (
    <div>GroupLayout</div>
  )
}

export default GroupLayout