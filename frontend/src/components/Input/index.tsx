import React, { InputHTMLAttributes, useState, useEffect, useRef } from 'react'
import { IconBaseProps} from 'react-icons'
import { useField } from '@unform/core'

import { Container} from './styles'
import { FiAlertCircle } from 'react-icons/fi'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    icon: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)

    const { fieldName, defaultValue, error, registerField} = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    return (
        <Container isFocused={isFocused} >
            {Icon && <Icon size={20} />}
            <input
                defaultValue={defaultValue}
                ref={inputRef} 
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...rest}
            />
            {error && <FiAlertCircle size ={20} color="#f00"/>}
        </Container>
    )
}

export default Input