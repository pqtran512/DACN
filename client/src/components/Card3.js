import React from 'react'
import { Link } from 'react-router-dom'

const Card3 = ({img, number, text1, text2, type}) => {
    return (
        <Link className={`relative overflow-hidden rounded-[20px] ${(type==='1')? 'h-[366px] md:h-[348px] xl:h-[302px]' : (type==='2')? 'md:row-span-2 h-[505px] md:h-[720px] xl:h-[628px]': 'md:col-span-2 h-[366px] md:h-[302px]'}`}>
            <img src={img} className='absolute top-0 left-0 w-full h-full' alt=''/>
            <div className="w-fit absolute top-6 right-6">
                <div className="bg-secondary-1 text-body-2 text-white rounded-md py-2 pl-[9px] pr-[6px]">{number} quan tâm</div>
            </div>
            <div className="absolute bottom-0 w-full h-[38%] bg-grad3 pb-5 pl-6 flex items-end">
                <div>
                    <div className="pb-2 text-title-1 leading-[18px] text-white font-semibold">{text1}</div>
                    <div className="text-caption-1 text-white">{text2}</div>
                </div>
            </div>
        </Link>
    )
}

export default Card3