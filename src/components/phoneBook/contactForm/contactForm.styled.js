import styled from 'styled-components'
import { Formik,Form,ErrorMessage,Field } from 'formik'

export const Main = styled(Formik)`
height: 40px;
margin-bottom: 16px;
color: ${({theme: {colors}}) => colors.red};
`

export const ContactForm = styled(Form)`
  
display: flex;
flex-flow: column;
gap: 16px;
padding: 20px;
border-radius: 4px;
background-color: ${({ theme: { colors } }) => colors.white};
box-shadow: ${({theme: {shadows}}) => shadows.addBoxShadow};
`

export const LabelForm = styled.label`

color: ${({ theme: { colors } }) => colors.black};
margin: 0;
margin-bottom: 16px
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 1.33; 
letter-spacing: -0.18px;
`


export const ErrorMsg = styled(ErrorMessage)`
margin-top: 10px;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.0; /* 100% */
letter-spacing: -0.72px;
color: red`

export const FieldForm = styled(Field)`
display: flex;
padding: 10px;
transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Buttons = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    padding: 20px 60px;
    margin: 0 auto;
    cursor: pointer;
    color: ${({theme: {colors}}) => colors.black};
    background-color: ${({theme: {colors}}) => colors.white};
    font-family: inherit;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: .04em;
    border-radius: 40px;
    border: 2px solid ${({theme: {colors}}) => colors.borderListColor};
    
    &:hover , &: focus{
        background-color: ${({ theme: { colors } }) => colors.borderListColor};
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    `