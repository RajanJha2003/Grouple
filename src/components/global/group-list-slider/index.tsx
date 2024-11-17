import React from 'react'

import {UseFormRegister} from 'react-hook-form'
import {SwiperProps,SwiperSlide} from 'swiper/react'
import Slider from '../slider'
import { GROUPLE_CONSTANTS } from '@/constants'



type Props={
    overlay?:boolean
    label?:string
    register?:UseFormRegister<any>
    selected?:string
    route?:boolean

} & SwiperProps

const GroupListSlider = ({overlay,label,register,selected,route,...rest}:Props) => {
  return (
    <Slider slidesPerView={"auto"} spaceBetween={10} loop freeMode label={label} overlay={overlay} {...rest}>
        {
            GROUPLE_CONSTANTS.groupList.map((item,i)=>(
                <SwiperSlide>
                    
                </SwiperSlide>
            ))
        }

    </Slider>
  )
}

export default GroupListSlider