import styled from 'styled-components'

export const Container = styled.div`
    background: #f4ede8;
    border-radius: 10px;
    border: 2px solid #dedede;
    padding: 16px;
    width: 100%;
    display: flex;

    align-items: center;

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
    }
`