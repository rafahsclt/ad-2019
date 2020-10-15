import styled, { css } from 'styled-components'

interface InputProps {
    isFocused: boolean
}

export const Container = styled.div<InputProps>`
    background: #f4ede8;
    border-radius: 10px;
    border: 2px solid #dedede;
    padding: 16px;
    width: 100%;
    display: flex;

    align-items: center;

    ${props => props.isFocused && 
        css`border-color: #000;`
    }

    & + div {
        margin-top: 8px;
    }

    input {
        flex: 1;
        background: transparent;
        color: #000;
        border: 0;

        &::placeholder {
            color: #858585;
        }
    }

    svg {
        color: #858585;
        margin-right: 16px;

        ${props => props.isFocused && 
            css`color: #f00;`
        }
    }
`

export const ErrorMessage = styled.div`
    height: 28px;
    margin-left: 16px;

    svg {
        margin: 0;
    }
`