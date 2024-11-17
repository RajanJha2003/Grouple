import React from 'react'

type Props={
    groupid:string,
    userid:string,
    mobile?:boolean
}

const SideBar = ({groupid,userid,mobile}:Props) => {
  return (
    <div>SideBar</div>
  )
}

export default SideBar