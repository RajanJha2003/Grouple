import { onGetChannelInfo } from '@/actions/channels';
import { onGetGroupInfo } from '@/actions/groups';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'

type Props = {
  params: { channelid: string; groupid: string }
}

const page = async({params}:Props) => {

  const client=new QueryClient();


  await client.prefetchQuery({
    queryKey:["group-info"],
    queryFn:()=>onGetGroupInfo(params.groupid)
  })

  await client.prefetchQuery({
    queryKey:["channel-info"],
    queryFn:()=>onGetChannelInfo(params.channelid)
  })



  return (
    <HydrationBoundary state={dehydrate(client)}>
      

    </HydrationBoundary>
  )
}

export default page