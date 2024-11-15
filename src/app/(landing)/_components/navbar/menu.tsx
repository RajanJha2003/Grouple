"use client";

import { Card, CardContent } from '@/components/ui/card';
import { GROUPLE_CONSTANTS } from '@/constants';
import { useNavigation } from '@/hooks/navigation'
import Link from 'next/link';
import React from 'react'


type MenuProps={
    orientation:"mobile" | "desktop"
}

const Menu = ({orientation}:MenuProps) => {
  
    const {section,onSetSection}=useNavigation();
   
    switch(orientation){
        case 'desktop':
            return(
                <Card className='bg-themeGray border-themeGray bg-clip-padding '>
                    <CardContent>
                        {
                            GROUPLE_CONSTANTS.landingPageMenu.map((menuItem)=>(
                                <Link  href={menuItem.path}>
                                </Link>
                            ))
                        }
                    </CardContent>
                </Card>
            )
    }
}

export default Menu