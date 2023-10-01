import React from 'react';
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className='bottom-0 left-0 w-full bg-neutral-1-900'>
            <div className='mx-auto md:max-w-3xl xl:max-w-7xl'>
                <div className='relative w-full pt-[26px] px-6 pb-[18px] md:pt-9 md:pb-[21px] lg:px-2 xl:pb-7 xl:pt-[57px] 2xl:px-0'>
                    <div className='pb-6 md:flex md:pb-[13px] xl:justify-between xl:pb-11'>
                        <div className='md:w-1/2 xl:flex xl:w-2/3'>
                            <div className='pb-6 md:max-w-[355px] md:pb-8 xl:max-w-[411px]'>
                                <div className='flex items-center pb-4 md:pb-[18px] xl:pb-5'>
                                    <Link to={'/'}><img className='w-[75px] h-[52px] object-contain' src='../img/header-footer/logo-white.png' alt='logo'/></Link>
                                    <Link to={'/'}><div className='pl-[14px] font-vampiroOne text-[28px] leading-[29px] tracking-[0.84px] text-white text-center uppercase'>
                                        Du lich
                                    </div></Link>
                                </div>
                                <div>
                                    <div className='pb-2 font-semibold text-white text-title-2 md:text-title-1 md:pb-[18px] xl:pb-4'>
                                        KB DULICH - CÔNG TY TNHH GIAO THÔNG VẬN TẢI VÀ DU LỊCH SÀI GÒN
                                    </div>
                                    <div className='text-neutral-1-300 text-caption-1 md:text-body-2'>
                                        <div className='pb-2 md:pb-4'>TP.Hồ Chí Minh: 190 - 192 Trần Quý, Phường 6, Quận 11, TP. HCM</div>
                                        <div className='pb-2 md:pb-4'>Đà Nẵng: 174 Nguyễn Văn Linh, Thanh Khê, TP. Đà Nẵng</div>
                                        <div className='pb-2 md:pb-4'>Hà Nội: 30 Phan Chu Trinh, Hoàn Kiếm, TP. Hà Nội</div>
                                        <div className='pb-2 md:pb-4'>Hotline: 1900 3398</div>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-6 w-[279px] md:hidden'>
                                <div className='pb-4 font-semibold text-white text-title-2'>
                                    ĐĂNG KÝ EMAIL ĐỂ NHẬN THÔNG TIN KHUYẾN MÃI
                                </div>
                                <div className='pb-[30px] text-neutral-1-300 text-[13px] leading-7'>Đăng nhập để nhận thông tin ưu đãi mới nhất. Chưa có tài khoản? 
                                Đăng ký ngay để có cơ hội giảm 10% cho chuyến đi tiếp theo của Quý khách!</div>
                                <div className='pt-6'>
                                    <img className='w-[151px] h-[58px]' src='../img/header-footer/Đăng ký Bộ Công Thương 1.png' alt=''/>
                                </div>
                            </div>
                            <div className='xl:pl-[120px]'>
                                <div className='pb-2 font-semibold text-white text-title-2 md:pb-4 md:text-title-1'>KB DU LICH</div>
                                <div className='text-neutral-1-300 text-caption-1 md:text-body-2 xl:w-[218px]'>
                                    <Link to={'/'} className='block pb-2 md:pb-4'>Du lịch trong nước</Link>
                                    <Link to={'/'} className='block pb-2 md:pb-4'>Tour ưu đãi giờ chót</Link>
                                    <Link to={'/'} className='block pb-2 md:pb-4'>Tour ưu đãi trong tháng</Link>
                                    <Link to={'/'} className='block pb-2 md:pb-4'>Tour yêu thích</Link>
                                    <Link to={'/'} className='block pb-2 md:pb-4'>Liên hệ</Link>
                                </div>
                                <div className='hidden md:block pt-6 xl:pt-[35px]'>
                                    <img className='w-[136px] h-7' src='../img/header-footer/badge.png' alt=''/>
                                </div>
                            </div>
                        </div>
                        <div className='hidden md:w-1/2 md:block pl-[86px] xl:pl-0 xl:w-1/3'>
                            <div className='pb-4 font-semibold text-white text-title-1'>
                                ĐĂNG KÝ EMAIL ĐỂ NHẬN THÔNG TIN KHUYẾN MÃI
                            </div>
                            <div className='pb-8 text-neutral-1-300 text-body-2 leading-7 xl:pb-[42px]'>Đăng nhập để nhận thông tin ưu đãi mới nhất. Chưa có tài khoản? 
                                Đăng ký ngay để có cơ hội giảm 10% cho chuyến đi tiếp theo của Quý khách!</div>
                            <div className='pt-8 xl:pt-[30px]'><img className='w-[151px] h-[58px]' src='../img/header-footer/Đăng ký Bộ Công Thương 1.png' alt=''/></div>
                        </div>
                    </div>
                    <div className='xl:max-w-7xl mx-auto'>
                        <div className='flex items-center justify-center pb-2'>
                            <div className='flex items-center'>
                                <i className='twi-22-facebook-fill text-[30px] leading-[30px] text-neutral-2-300 xl:text-neutral-1-400'></i>
                            </div>
                            <div className='flex items-center pl-6'>
                                <i className='twi-22-twitter-fill text-[30px] leading-[30px] text-neutral-2-300 xl:text-neutral-1-400'></i>
                            </div>
                            <div className='flex items-center pl-6'>
                                <i className='twi-22-linkedin-fill text-[30px] leading-[30px] text-neutral-2-300 xl:text-neutral-1-400'></i>
                            </div>
                            <div className='flex items-center pl-6'>
                                <i className='twi-22-instagram-line text-[30px] leading-[30px] text-neutral-2-300 xl:text-neutral-1-400'></i>
                            </div>
                        </div>
                        <div className='flex items-center justify-center text-body-2 text-white'>COPYRIGHT © 2022 KBDULICH. All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
