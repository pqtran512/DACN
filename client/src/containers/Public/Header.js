import React, { useState } from 'react';
import blueLogo from '../../assets/img/header-footer/logo-blue.png'
import icons from '../../ultils/icons';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const { FiLogOut, FaRegUser } = icons

const Header = () => {
    // PARAMETER
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);
    const {isLoggedIn} = useSelector(state => state.auth)
    const { currentData } = useSelector(state => state.user) // user: userReducer (rootReducer.js)

    // FUNCTION
    // onclick navbar-menu function on mobile/ tablet screen
    const handleOpen = event => {
        // 👇️ toggle isActive state on click
        setIsOpen(current => !current);
    };
    // dropdown navbar submenu on mobile/ tablet screen
    const handleDropdown = event => {
        // 👇️ toggle isDropdown state on click
        setIsDropdown(current => !current);
    };
    return (
        <header className='w-full bg-white shadow-shad1 sticky top-0 z-50'>
            <div className='mx-auto w-full md:max-w-3xl xl:max-w-7xl'>
                <div className='h-[95px] px-6 flex justify-between items-center lg:px-2 xl:h-[78px] 2xl:px-0'>
                    <div id='menu-icon' className='flex items-center xl:hidden' onClick={handleOpen}>
                        <i className='twi-22-align-justify-line text-[24px] leading-6 text-black'></i>
                    </div>
                    <div className='flex items-center'>
                        <Link to={'/'} >
                            <img className='w-[60px] h-[42px] object-contain md:w-[75px] md:h-[52px]' src={blueLogo} alt='logo'/>
                        </Link>
                        <Link to={'/'} >
                            <span className='font-vampiroOne text-[24px] text-neutral-1-900 tracking-[0.72px] uppercase pl-2 md:pl-[14px] md:text-[28px] md:tracking-[0.84px]'>
                            Du lich
                            </span>
                        </Link>
                    </div>
                    <div className='flex items-center'>
                        <div className='xl:flex xl:pr-8'>
                            <div className={(isOpen ? 'left-open' : '') +  " navbar-list z-50 absolute top-full -left-full w-full bg-white text-header-2 font-semibold text-neutral-1-900 overflow-y-scroll scrollbar-width-thin scrollbar-thumb:bg-neutral-3-300 scrollbar-rounded flex flex-col md:text-header-1 xl:static xl:flex-row xl:overflow-visible xl:items-center"}>
                                <div className='navbar-title w-full relative group xl:w-fit'>
                                    <Link {...(isOpen? {}: {to:'/*'})} className='menu-title flex items-center pb-2' onClick={handleDropdown}>
                                        <div>Du lịch</div>
                                        <span className='arrow flex items-center justify-center w-6 h-6'>
                                            <i className='twi-22-chevron-line rotate-90 text-[13px] leading-2 text-neutral-1-900 font-semibold'></i>
                                        </span>
                                    </Link>
                                    <ul className={(isDropdown ? 'open dropdown' : '') + ' bg-white text-body-1 transition-all duration-500 xl:absolute xl:z-20 xl:left-0 xl:py-1 xl:mt-4 xl:w-[250px] xl:rounded-b-[4px] xl:duration-300 xl:opacity-0 xl:translate-y-2 xl:group-hover:translate-y-0 xl:group-hover:opacity-100'}>
                                        <li><Link to={'/search'} className='block px-3 py-[10px]'>Du lịch trong nước</Link></li>
                                        <li><Link to={'/search'} className='block px-3 py-[10px]'>Tour ưu đãi giờ chót</Link></li>
                                        <li><Link to={'/search'} className='block px-3 py-[10px]'>Tour ưu đãi trong tháng</Link></li>
                                        <li><Link to={'/search'} className='block px-3 py-[10px]'>Tour yêu thích</Link></li>
                                    </ul>
                                </div>
                                <Link to={'/'} className='w-full pb-2 xl:w-fit xl:pl-16'>Liên hệ</Link>
                                {isLoggedIn && 
                                    <button className='h-fit xl:pl-16' onClick={() => dispatch(actions.logout())}>
                                        <FiLogOut size={28}/>
                                    </button>
                                }
                            </div>
                        </div>
                        <Link to={'/login'} className='h-fit'>
                            <FaRegUser size={28}/>
                        </Link>
                        {isLoggedIn && <div className='hidden md:block pl-8'>Xin chào, {currentData.email}</div>}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
