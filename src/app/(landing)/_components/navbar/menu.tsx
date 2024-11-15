"use client";

import { Card } from '@/components/ui/card';
import { useNavigation } from '@/hooks/navigation'
import React from 'react'


type MenuProps={
    orientation:"mobile" | "desktop"
}

const Menu = ({orientation}:MenuProps) => {
  
    const {section,onSetSection}=useNavigation();
   
    switch(orientation){
        case 'desktop':
            return(
                <Card className='bg-themeGray border-themeGray'>

                </Card>
            )
    }
}

export default Menu