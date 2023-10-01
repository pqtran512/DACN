import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '../../assets/img/header-footer/logo-white.png'
import { InputForm, Button } from '../../components'
import * as actions from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {
    // PARAMETERS
    // useState to check if in Login or Register page
    const [isRegister, setisRegister] = useState(false)
    // check inputs
    const [invalidFields, setInvalidFields] = useState([])
    // Register API
    const [payload, setPayload] = useState({ 
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const { isLoggedIn, msg, update } = useSelector(state => state.auth) // auth in rootReducer
    const navigate = useNavigate()

    // FUNCTIONS
    // validate inputs and call API
    const handleSubmit = async () => {
        let invalids = validate(payload)
        if (invalids === 0) 
            isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload)) 
    }
    // validate inputs function
    const validate = (payload) => {
        let invalids = 0 // number of invalid fields
        let fields = Object.entries(payload) // tranform an object {key: value} to array [key, value]
        fields.forEach(item => {
            switch (item[0]) {
                case 'email':
                    if (item[1] === '') { // item[1] is the value field
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Bạn chưa nhập email !'
                        }])
                        invalids++
                    } 
                    else {
                        if (!(/\S+@\S+\.\S+/.test(item[1]))) {
                            setInvalidFields(prev => [...prev, {
                                name: item[0],
                                message: 'Email không hợp lệ !'
                            }])
                            invalids++
                        }
                    }
                    break;
                case 'password':
                    if (item[1] === '') {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            message: 'Bạn chưa nhập mật khẩu !'
                        }])
                        invalids++
                    } else {
                        if (item[1].length < 6) {
                            setInvalidFields(prev => [...prev, {
                                name: item[0],
                                message: 'Mật khẩu phải có tối thiểu 6 kí tự !'
                            }])
                            invalids++
                        }
                    }
                    break;
                default:
                    break;
            }
        })
        return invalids
    }
    // if isLoggedIn is true -> go to homepage
    useEffect(() => {
        isLoggedIn && navigate('/')
    }, [isLoggedIn])
    // Popup msg when login failed
    useEffect(() => {
        msg && Swal.fire('Oops !', msg, 'error')
    }, [msg, update]) // variable in [] -> dependency -> run when 1 of them changes

    return (
        <div className='overflow-hidden font-segoe text-neutral-1-900'>
            <div className='w-full h-screen bg-primary-1 flex flex-col items-center justify-center gap-10'>
                <div className='flex items-center'>
                    <Link to='/*'>
                        <img className='w-[60px] h-[42px] object-contain md:w-[75px] md:h-[52px]' src={whiteLogo} alt='logo'/>
                    </Link>
                    <Link to='/*'>
                        <span className='font-vampiroOne text-[24px] text-white tracking-[0.72px] uppercase pl-2 md:pl-4 md:text-[40px] md:tracking-[0.84px]'>
                        Du lich
                        </span>
                    </Link>
                </div>
                <div className='flex flex-col gap-5 bg-white w-[550px] rounded-xl p-8'>
                    <div className='text-header-1 font-bold'>{isRegister ? 'ĐĂNG KÝ TÀI KHOẢN' : 'ĐĂNG NHẬP THÀNH VIÊN'}</div>
                    <InputForm 
                        invalidFields={invalidFields} 
                        setInvalidFields={setInvalidFields} 
                        label='Email' 
                        placeholder='Nhập email' 
                        value={payload.email} 
                        setValue={setPayload} 
                        keyPayload={'email'}
                    />
                    <InputForm 
                        invalidFields={invalidFields} 
                        setInvalidFields={setInvalidFields} 
                        label='Mật khẩu' 
                        placeholder='Nhập mật khẩu' 
                        value={payload.password} 
                        setValue={setPayload} 
                        keyPayload={'password'}
                        type='password'
                    />
                    <Button 
                        text={isRegister ? 'Đăng ký' : 'Đăng nhập'} 
                        textColor='text-white' 
                        bgColor='bg-primary-2'
                        mt
                        onClick={handleSubmit}
                    />
                    {isRegister ? 
                        <div className='text-body-1 mx-auto'>Bạn đã có tài khoản?  
                            <span onClick={() => {
                                setisRegister(false)
                                setPayload({
                                    email: '',      // remove the fields when switch pages
                                    password: ''
                                })
                                setInvalidFields([]) // remove all errors
                            }} 
                                className='pl-1 text-primary-1 hover:text-secondary-1 cursor-pointer'>
                                Đăng nhập ngay
                            </span>
                        </div> 
                    : 
                        <div className='text-body-1 mx-auto'>Bạn chưa có tài khoản?  
                            <span onClick={() => {
                                setisRegister(true)
                                setPayload({
                                    email: '',      // remove the fields when switch pages
                                    password: ''
                                })
                                setInvalidFields([]) // remove all errors
                            }} 
                                className='pl-1 text-primary-1 hover:text-secondary-1 cursor-pointer'>
                                Đăng ký ngay
                            </span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login
