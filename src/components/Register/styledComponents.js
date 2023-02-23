import styled from 'styled-components'

export const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Roboto';
`
export const WebLogo = styled.img`
  height: 50px;
  width: 160px;
  align-self: flex-end;
  justify-self: flex-start;
  margin-bottom: 50px;
  margin-top: 0;
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: flex-start;
  align-self: flex-start;
  width: 50%;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 300px;
  width: 300px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormHeading = styled.h1`
  color: #334155;
  font-size: 35px;
  font-weight: 600;
`

export const LabelStyles = styled.label`
  color: #647488;
  font-size: 15px;
  font-weight: 500;
`
export const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputElement = styled.input`
  height: 40px;
  width: 300px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
`

export const SelectEl = styled.select`
  height: 40px;
  width: 300px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
`
export const RegisterButton = styled.button`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  height: 40px;
  width: 100px;
  border-radius: 5px;
  background-color: #3b82f6;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
`
