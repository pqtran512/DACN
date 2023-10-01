import React from 'react'
import { Link } from 'react-router-dom'
import icons from '../ultils/icons'

const { HiOutlineExternalLink } = icons

const Card2 = ({img, location, price1, price2, id, time, animation, hidden, link}) => {
    return (
        <div className={`${hidden} relative pb-[21px] rounded-[20px] shadow-shad1 overflow-hidden group md:pb-[23px] xl:pb-[31px] animate-fade-down ${animation}`}>
            <div className="relative w-full pt-[48.09%] md:pt-[44.83%] transition-all xl:pt-[45.63%] xl:overflow-hidden">
                <img className="absolute w-full h-full top-0 left-0 object-cover transition-all xl:group-hover:scale-125" src={img} alt=''/>
            </div>
            <div className="absolute w-full px-6 top-4 flex items-center justify-between">
                <div className="text-white text-title-2 font-semibold xl:text-title-1">{location}</div>
                <Link to={link} className="flex items-center justify-center bg-white/40 w-7 h-7 rounded-full">
                    <HiOutlineExternalLink color="white" size='22'/>
                </Link>
            </div>
            <div className="flex items-center justify-between pt-4 px-6 md:pt-[14px] xl:pt-[22px]">
                <div className="max-w-[74%]">
                    <div className="flex items-center">
                        <div className="w-[99px] line-through text-neutral-1-500 text-body-1 leading-[17px]">{price1}</div>
                        <div className="pl-2 text-header-2 text-secondary-1 font-semibold leading-[17px]">{price2}</div>
                    </div>
                    <div className="py-4 text-caption-1 leading-[17px] font-semibold text-neutral-1-900 md:py-[18px] xl:text-[14px]">Mã tour: {id}</div>
                    <div className="text-caption-1 text-neutral-1-600 leading-[17px]">Thời gian : {time}</div>
                </div>
                <div className="w-[55px] h-[55px] py-[17px] px-[11px] rounded-full bg-white border-[3px] border-neutral-1-50 xl:w-[60px] xl:h-[60px]">
                    <img src="../img/header-footer/logo-blue.png" alt='' />
                </div>
            </div>
        </div>
    )
}

export default Card2