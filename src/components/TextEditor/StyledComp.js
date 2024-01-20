import styled from 'styled-components'

export const TextArea = styled.textarea`
  font-weight: ${props => props.boldStyle};
  font-style: ${props => props.italicStyle};
  text-decoration: ${props => props.underlineStyle};
  background-color: transparent;
  outline: none;
  border: none;
  height: 90vh;
  padding: 20px;
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 24px;
`

export const MainContainer = styled.div`
  background-color: #1b1c22;
  background-size: cover;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  align-items: center;
`
export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TextEditorHeading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  height: 130px;
`
export const TextEditorImage = styled.img`
  height: 320px;
  margin-top: 0px;
`
export const TextEditContainer = styled.div`
  border: 0.1px solid #cbd5e1;
  background-color: #25262c;
  border-radius: 5px;
  width: 50%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`
export const EditButtonsContainer = styled.ul`
  display: flex;
  align-items: center;
  border-bottom: 0.1px solid #cbd5e1;
  padding: 10px;
`
export const ButtonListStyle = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  color: ${props => props.color};
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin-right: 13px;
`
