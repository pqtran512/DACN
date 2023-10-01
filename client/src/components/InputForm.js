import React, { memo } from 'react'

const InputForm = ({ label, asterisk, placeholder, type, value, setValue, keyPayload, invalidFields, setInvalidFields}) => {
    return (
        <div>
            <label htmlFor={keyPayload} className='text-title-1 text-neutral-1-900'>{label}<span className='text-red-500'>{asterisk? '*' : ''}</span></label>
            <input 
                id={keyPayload}
                type={type || 'text'}
                className='w-full rounded-md mt-1 p-3 bg-neutral-3-50 text-neutral-1-600'  
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(prev => ({...prev, [keyPayload]: e.target.value}))} // specify input by keyPayload -> change only that input
                onFocus={() => setInvalidFields([])}
            />
            {/* some(): loop and find by condition -> return true/ false 
                find(): find and return an object
            */}
            {invalidFields.length > 0 && invalidFields.some(i => i.name === keyPayload)
                && <div className='pt-1 text-title-2 text-accent-3'>{invalidFields.find(i => i.name === keyPayload)?.message}</div>
            }  
            <div></div>
        </div>
    )
}

export default memo(InputForm)