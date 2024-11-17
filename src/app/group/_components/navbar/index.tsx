import GlassSheet from '@/components/global/glass-sheet'
import SideBar from '@/components/global/sidebar'
import { currentUser } from '@clerk/nextjs/server'
import { Menu } from 'lucide-react'
import React from 'react'

type Navbarprops={
    groupid:string,
    userid:string
}

const Navbar = async({groupid,userid}:Navbarprops) => {
    const user=await currentUser();
  return (
    <div>
        <GlassSheet trigger={<Menu className='md:hidden cursor-pointer' />}>
            <SideBar groupid={groupid} userid={userid} mobile />
        </GlassSheet>
        

    </div>
  )
}

export default Navbar