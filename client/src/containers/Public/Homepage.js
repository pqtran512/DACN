import React from 'react';
import logoBlue from '../../assets/img/header-footer/logo-blue.png'
import { Datepicker, InputForm, ButtonRound, Card1, Card2, Card3 } from '../../components'

const Main = () => {
    return (
        <div className='overflow-x-hidden'>
            {/* Banner giới thiệu */}
            <section className="flex justify-center relative w-full bg-mountain animate-fade md:bg-mountain-md xl:bg-mountain-xl bg-center bg-no-repeat bg-cover rounded-b-[20px]">
                <div className="w-full pt-[90px] pb-10 px-6 md:pt-16 md:max-w-3xl md:pb-[200px] lg:px-2 xl:max-w-7xl xl:pt-[150px] xl:pb-[196px] 2xl:px-0">
                    <div className="absolute top-0 left-0 h-full right-1/2 bg-grad opacity-80 rounded-bl-[20px] md:right-1/3 xl:right-1/2"></div>
                    <div className="relative z-10">
                        <div className="text-black pb-[71px] md:pb-[26px] xl:pb-[62px]">
                            <div className="pb-4 font-semibold xl:pb-6">
                                <div className="text-heading-4 md:text-heading-3 xl:text-[48px] xl:leading-[64px]">Khám phá điểm đến yêu thích</div>
                                <div className="text-heading-4 md:text-heading-3 xl:text-[48px] xl:leading-[64px]">Kỳ quan thế giới</div>
                            </div>
                            <div className="pb-4 xl:pb-6 xl:space-y-[18px]">
                                <div className="text-body-2 md:text-body-1 xl:text-[30px] xl:leading-6">Cùng khám phá các điểm đến yêu thích</div>
                            </div>
                            <ButtonRound width='w-[170px]' height='h-12' text='Tìm hiểu thêm' textColor='text-white' bgColor='bg-primary-2' type='btn1' hoverType='btn-dark' textSize='text-body-2 md:text-button' />
                        </div>
                        <div className="relative animate-fade-down">
                            <div className="bg-white rounded-[20px] shadow-shad1 py-[18px] px-6 md:rounded-[6px] md:pt-5 md:pr-[7px] md:flex md:mr-4 md:justify-between xl:mr-[326px] xl:pr-[21px]">
                                <div className="flex justify-between pb-6 md:pb-0 md:gap-x-[18px] xl:gap-x-[95px]">
                                    <div className="md:w-[156px] xl:w-fit">
                                        <div className='text-[14px] h-[31px] text-neutral-1-900 font-semibold xl:text-[18px]'>Nhập điểm đi</div>
                                        {/* <InputForm/> */}
                                    </div>
                                    <div className="md:w-[163px] xl:w-fit">
                                        <div className='text-[14px] h-[31px] text-neutral-1-900 font-semibold xl:text-[18px]'>Nhập điểm đến</div>
                                        {/* <InputForm/> */}
                                    </div>
                                </div>
                                <div className="flex justify-between md:gap-x-[37px] xl:gap-x-[104px]">
                                    <div className="min-w-[148px]">
                                        <div className="pr-2 text-[14px] h-[31px] text-neutral-1-900 font-semibold xl:text-[18px]">Chọn ngày</div>
                                        <Datepicker width='w-[148px]'/>
                                    </div>
                                    <ButtonRound width='w-[148px]' height='h-[52px]' text='Khám phá ngay' textColor='text-white' bgColor='bg-primary-2' type='btn1' hoverType='btn-dark' textSize='text-caption-2 md:text-button1'/>
                                </div>
                            </div>
                            <div className="absolute -z-10 bg-grad2 rounded-[20px] backdrop-blur-md shadow-[20px_20px_59px_11px_rgba(0,0,0,0.07)] w-full top-28 pt-[95px] px-6 pb-6 md:pt-[43px] md:top-20 xl:pt-16 xl:px-[85px] xl:pb-[83px] xl:top-[63px]">
                                <div className="pb-4 text-[18px] text-neutral-1-900 leading-[31px] font-semibold md:pb-6 md:text-[20px] xl:text-[24px]">Ưu đãi Tour giờ chót</div>
                                <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-[132px] xl:grid-cols-3 xl:gap-x-[150px]">
                                    <Card1 img='../img/home/sec1-img1.png' text1='Quảng Ninh' text2='Thành phố Hạ Long' price='10,500,000đ' />
                                    <Card1 img='../img/home/sec1-img2.png' text1='Đà Nẵng' text2='Bà Nà Hills' price='12,500,000đ' />
                                    <Card1 img='../img/home/sec1-img3.png' text1='Quảng Ninh' text2='Thành phố Hạ Long' price='10,500,000đ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Tour ưu đãi */}
            <section className="mx-auto w-full pt-[262%] pb-20 md:max-w-3xl md:pb-[120px] md:pt-[461px] xl:pb-[100px] xl:pt-[289px] xl:max-w-7xl">
                <div className="px-6 lg:px-2 2xl:px-0">
                    <div className="pb-8 xl:pb-[60px] text-neutral-1-900">
                        <div className="pb-4 text-[23px] font-semibold leading-[31px] md:text-[24px] md:pb-2 xl:pb-4 xl:text-[32px]">Ưu đãi đặc biệt Tour trong tháng</div>
                        <div className="text-body-2 xl:text-body-1">Sự lựa chọn hoàn hảo và được yêu thích nhất dựa trên đánh giá từ du khách.</div>
                    </div>
                    <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-6 md:gap-y-8 xl:grid-cols-3 ">
                        {/* mobile (3 cards), tablet (6 cards), desktop (9 cards) */}
                        <Card2 link='/tour-detail' img='../img/home/sec2-img1.png' location='Thành phố Hạ Long' price1='11,500,000đ' price2='10,500,000đ' id='HCMPQ4N4D_0512' time='3 ngày 2 đêm' animation='md:animate-fade-right xl:animate-fade'/>
                        <Card2 img='./img/home/sec2-img2.png' location='Thành phố Hạ Long' price1='11,500,000đ' price2='10,500,000đ' id='HCMPQ4N4D_0512' time='3 ngày 2 đêm' animation='md:animate-fade-left xl:animate-fade'/>
                        <Card2 img='./img/home/sec2-img3.png' location='Thành phố Hạ Long' price1='11,500,000đ' price2='10,500,000đ' id='HCMPQ4N4D_0512' time='3 ngày 2 đêm' animation='md:animate-fade-right xl:animate-fade'/>
                        
                        <Card2 hidden='hidden md:block' img='./img/home/sec2-img1.png' location='Thành phố Hạ Long' price1='11,500,000đ' price2='10,500,000đ' id='HCMPQ4N4D_0512' time='3 ngày 2 đêm' animation='md:animate-fade-left xl:animate-fade'/>
                        <Card2 hidden='hidden md:block' img='./img/home/sec2-img2.png' location='Thành phố Hạ Long' price1='11,500,000đ' price2='10,500,000đ' id='HCMPQ4N4D_0512' time='3 ngày 2 đêm' animation='md:animate-fade-right xl:animate-fade'/>
                        <Card2 hidden='hidden md:block' img='./img/home/sec2-img3.png' location='Thành phố Hạ Long' price1='11,500,000đ' price2='10,500,000đ' id='HCMPQ4N4D_0512' time='3 ngày 2 đêm' animation='md:animate-fade-left xl:animate-fade'/>
                        
                        <Card2 hidden='hidden xl:block' img='./img/home/sec2-img1.png' location='Thành phố Hạ Long' price1='11,500,000đ' price2='10,500,000đ' id='HCMPQ4N4D_0512' time='3 ngày 2 đêm' animation='xl:animate-fade'/>
                        <Card2 hidden='hidden xl:block' img='./img/home/sec2-img2.png' location='Thành phố Hạ Long' price1='11,500,000đ' price2='10,500,000đ' id='HCMPQ4N4D_0512' time='3 ngày 2 đêm' animation='xl:animate-fade'/>
                        <Card2 hidden='hidden xl:block' img='./img/home/sec2-img3.png' location='Thành phố Hạ Long' price1='11,500,000đ' price2='10,500,000đ' id='HCMPQ4N4D_0512' time='3 ngày 2 đêm' animation='xl:animate-fade'/>
                    </div>
                    <div className="pt-6 w-full flex items-center justify-center xl:pt-11">
                        <ButtonRound link='/search' width='w-[142px]' height='h-[51px]' text='Xem thêm' textColor='text-neutral-1-900' border='border-[2px] border-primary-2' type='btn3' hoverType='btn-light' textSize='text-button1 font-semibold xl:text-black xl:text-button'/>
                    </div>
                </div>
            </section>
            {/* Banner cây dừa */}
            <section className="pt-[42px] pb-10 w-full bg-coconut bg-center bg-no-repeat bg-cover md:bg-coconut-md md:pt-[30px] xl:bg-coconut-xl xl:pt-[111px] xl:pb-[148px]">
                <div className="mx-auto lg:px-2 xl:max-w-7xl 2xl:px-0">
                    <div className="mx-auto max-w-[319px] md:max-w-[345px] xl:ml-0 xl:max-w-[403px]">
                        <div className="pb-2 flex items-center md:pb-4 xl:pb-6">
                            <img className="w-[75px] h-[52px] object-contain xl:w-[80px] xl:h-[56px]" src={logoBlue} alt=''/>
                            <div className="w-[141px] font-vampiroOne text-[28px] leading-[29px] tracking-[0.84px] text-neutral-1-900 text-center uppercase md:ml-2 xl:ml-[14px] xl:text-[32px]">
                                Du lich
                            </div>
                        </div>
                        <div className="pb-[69px] text-neutral-1-900 text-body-2 md:pb-[33px] xl:pb-[110px] xl:text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mus aenean vitae, dui dis. Placerat</div>
                    </div>
                    <div className="flex items-center justify-center xl:items-start xl:justify-start">
                        <div className="grid gap-y-8 xl:grid-cols-3 xl:gap-x-8 xl:animate-fade-right">
                            <div className="w-[257px] min-h-[94px] flex items-center justify-center bg-white/60 rounded-[50px] backdrop-blur-sm md:bg-white/80">
                                <div className="w-fit">
                                    <div className="font-prata text-[28px] leading-[50px] text-primary-2 text-center">+1200</div>
                                    <div className="text-body-1 text-neutral-1-900/80 text-center">Địa điểm trên cả nước</div>
                                </div>
                            </div>
                            <div className="w-[257px] min-h-[94px] flex items-center justify-center bg-white/60 rounded-[50px] backdrop-blur-sm md:bg-white/80">
                                <div className="w-fit">
                                    <div className="font-prata text-[28px] leading-[50px] text-primary-2 text-center">+1200</div>
                                    <div className="text-body-1 text-neutral-1-900/80 text-center">Tour trong nước</div>
                                </div>
                            </div>
                            <div className="w-[257px] min-h-[94px] flex items-center justify-center bg-white/60 rounded-[50px] backdrop-blur-sm md:bg-white/80">
                                <div className="w-fit">
                                    <div className="font-prata text-[28px] leading-[50px] text-primary-2 text-center">+1200</div>
                                    <div className="text-body-1 text-neutral-1-900/80 text-center">Tour ưu đãi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Điểm đến yêu thích */}
            <section className="pt-20 pb-40 xl:pt-[100px]">
                <div className="relative">
                    <div className="absolute top-0 left-0 w-full">
                        <div className="relative w-full pt-[28%] md:pt-[27%] xl:pt-[20%]">
                            <img className="absolute w-full h-full -top-5 left-0 object-contain" src="../img/home/curve.png" alt=''/>
                        </div>
                    </div>
                    <div className="mx-auto px-6 md:max-w-3xl lg:px-2 xl:max-w-7xl 2xl:px-0">
                        <div className="text-heading-4 font-semibold text-neutral-1-900 pb-4 md:pb-2 xl:hidden">Ưu đãi đặc biệt Tour trong tháng</div>
                        <div className="hidden pb-4 text-[32px] font-semibold leading-[31px] text-neutral-1-900 xl:block">
                            Điểm đến yêu thích trong tháng
                        </div>
                        <div className="pb-8 text-body-2 text-neutral-1-900 xl:pb-[60px] xl:text-body-1">
                            Sự lựa chọn hoàn hảo và được yêu thích nhất dựa trên đánh giá từ du khách.
                        </div>
                        <div className="grid gap-6 animate-fade-down md:animate-fade xl:grid-cols-xl">
                            <div className="grid gap-6 md:grid-flow-col md:grid-cols-md md:grid-rows-2 xl:grid-subcols-xl">
                                <Card3 img='./img/home/sec3-img1.png' number='358' text1='Kỳ co eo gió' text2='Quy Nhơn' type='1'/>
                                <Card3 img='./img/home/sec3-img1.png' number='358' text1='Kỳ co eo gió' text2='Quy Nhơn' type='1'/>
                                {/* longest card */}
                                <Card3 img='./img/home/sec3-img2.png' number='358' text1='Kỳ co eo gió' text2='Quy Nhơn' type='2'/>
                            </div>
                            <div className="grid gap-6 md:grid-cols-md md:grid-rows-temp xl:grid-subcols2-xl">
                                {/* largest card */}
                                <Card3 img='./img/home/sec3-img3.png' number='358' text1='Kỳ co eo gió' text2='Quy Nhơn' type='3'/>
                                <Card3 img='./img/home/sec3-img4.png' number='358' text1='Kỳ co eo gió' text2='Quy Nhơn' type='1'/>
                                <Card3 img='./img/home/sec3-img1.png' number='358' text1='Kỳ co eo gió' text2='Quy Nhơn' type='1'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
