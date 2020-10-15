import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
    background: #fff;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    width: 100%;
    color: #B71818;
    font-weight: bold;
    line-height: 30px;
    margin-top: 12px;
    transition: background-color 0.2s;

    :hover {
        background: ${shade(0.2, '#fff')};
    }
`