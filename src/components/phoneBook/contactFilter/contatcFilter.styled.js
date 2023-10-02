import styled from 'styled-components'

export const ContactsWrapper = styled.div`
margin-bottom: 20px;
margin-top: 20px;`

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

export const Search = styled.input`
  display: flex;
padding: 10px;
`

export const ResetButtons = styled.button`
  color: white;
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 36px;
  border: none;
  background-color: ${({ theme: {colors} }) => colors.borderListColor};
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
  &:hover, &:focus {
    background-color: ${({ theme: { colors } }) => colors.red};
  }`

  export const LabelContacts = styled.label`
display: flex;
align-items: center;
gap: 20px;
color: ${({theme: {colors}}) => colors.addBlack};
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 1.33; /* 133.333% */
letter-spacing: -0.18px;
text-transform: uppercase;
`