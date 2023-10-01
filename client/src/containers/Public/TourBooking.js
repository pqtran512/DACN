import React from 'react';
// import { InputForm } from '../../components'; 

const TourBooking = () => {
    return (
        <div>
            <section className="mx-auto w-full pt-10 xl:max-w-7xl">
                <div className="px-6 lg:px-2 2xl:px-0">
                    <div className="truncate w-full flex items-center py-[10px] gap-x-2">
                        <div className="text-neutral-1-600 text-body-1 leading-[34px] xl:text-[20px]">Du lịch</div>
                        <div className="flex items-center justify-center w-6 h-6">
                            <i className="twi-22-chevron-line text-[16px] text-secondary-1 text-center"></i>
                        </div>
                        <div className="text-neutral-1-600 text-body-1 leading-[34px] xl:text-[20px]">Du lịch trong nước</div>
                        <div className="flex items-center justify-center w-6 h-6">
                            <i className="twi-22-chevron-line text-[16px] text-secondary-1 text-center"></i>
                        </div>
                        <div className="text-neutral-1-600 text-body-1 leading-[34px] xl:text-[20px]">Đà Nẵng - Bà Nà - Cầu Vàng - Sơn Trà - Biển Mỹ Khê - Hội An - Đà Nẵng</div>
                        <div className="flex items-center justify-center w-6 h-6">
                            <i className="twi-22-chevron-line text-[16px] text-secondary-1 text-center"></i>
                        </div>
                        <div className="truncate text-body-1 leading-[34px] text-neutral-1-900 xl:text-[20px]">Thanh toán</div>
                    </div>
                    <div className='pt-5 flex items-center justify-center px-20 xl:justify-between'>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <div className='w-11 h-11 flex items-center justify-center rounded-full bg-accent-9 text-header-1 text-white'>1</div>
                            <div className='text-body-1 text-accent-9 md:text-body-2'>Điền thông tin</div>
                        </div>
                        <div className='bg-neutral-3-300 w-60 h-[2px] hidden xl:block'></div>
                        <div className='flex-col gap-2 items-center justify-center hidden xl:flex'>
                            <div className='w-11 h-11 flex items-center justify-center rounded-full bg-accent-9 text-header-1 text-white'>2</div>
                            <div className='text-body-1 text-accent-9 md:text-body-2'>Thanh toán</div>
                        </div>
                        <div className='bg-neutral-3-300 w-60 h-[2px] hidden xl:block'></div>
                        <div className='flex-col gap-2 items-center justify-center hidden xl:flex'>
                            <div className='w-11 h-11 flex items-center justify-center rounded-full bg-accent-9 text-header-1 text-white'>3</div>
                            <div className='text-body-1 text-accent-9 md:text-body-2'>Xác nhận</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-auto w-full pt-10 pb-[120px] md:pb-[120px] xl:pb-[80px] xl:max-w-7xl">
                <div className="px-6 lg:px-2 2xl:px-0">
                    <div className='xl:flex flex-row-reverse justify-center'>
                        <div className='w-full p-6 bg-neutral-3-100 rounded-3xl max-w-[450px] mx-auto xl:w-1/2'>
                            <div className='text-center text-body-2 font-semibold text-neutral-900 md:text-body-1'>Thông tin đặt tour</div>
                            <div className='py-3 flex gap-5 border-b border-white'>
                                <img className='h-16 w-24 rounded-md' src='../img/home/sec2-img2.png' alt='' />
                                <div className="text-neutral-1-900 text-title-2 font-semibold xl:text-title-1">Đà Nẵng - Bà Nà - Cầu Vàng - Sơn Trà - Biển Mỹ Khê - Hội An - Đà Nẵng</div>
                            </div>
                            <div className="pt-5 flex flex-col gap-6 text-body-2">
                                <div className='flex justify-between'>
                                    <div className="text-neutral-1-500">Mã tour</div>
                                    <div className='text-neutral-1-900'>HCMPQ4N4D_0512</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className="text-neutral-1-500">Ngày khởi hành</div>
                                    <div className='text-neutral-1-900'>31/08/2023</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className="text-neutral-1-500">Số khách</div>
                                    <div className='text-neutral-1-900'>1 khách</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className="text-neutral-1-500">Giá 1 khách</div>
                                    <div className='text-neutral-1-900'>22,690,000 VND</div>
                                </div>
                                <div className='flex font-semibold justify-between'>
                                    <div className='text-neutral-1-900'>Tổng tiền</div>
                                    <div className='text-secondary-1'>22,690,000 VND</div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-10 xl:pt-0 xl:w-1/2'>
                            <div className='text-center text-body-2 font-semibold text-neutral-900 md:text-body-1'>Điền thông tin liên hệ</div>
                            <div>
                                <div className='text-body-2 font-semibold text-neutral-1-900'> Họ tên <span className='text-red-500'>*</span></div>
                                {/* use InputForm when write API */}
                                {/* <InputForm label='Họ tên' asterisk={true}/> */} 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TourBooking
