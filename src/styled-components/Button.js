import React from 'react'
import styled from 'styled-components/native'

const PrimaryButton = styled.TouchableOpacity`
    width: ${({ width }) => width || '134px'};
    height: ${({ height }) => height || '64px'};
    background: ${({ disabled }) => disabled ? "rgba(211,106,73,0.5)" : '#D36A49'};
    border-radius: ${({br}) => br || '12px'};
    color:white;
    display:flex;
    flex-direction:column;
    justify-content: center;
    margin-top: ${({mt}) => mt || '0px'};
`;

const SecondaryButton = styled.TouchableOpacity`
    width: ${({ width }) => width || '80%'};
    height: ${({ height }) => height || '42px'};
    background: ${({bg}) => bg || '#D36A49'};
    border-radius: ${({br}) => br || '8px'};
    color:white;
    display:flex;
    flex-direction:column;
    justify-content: center;
    margin-top: ${({mt}) => mt || '0px'};
  
`;

const NextButton = styled.TouchableOpacity`
width: 60px;
height: 60px;
background:${({ disabled }) => disabled ? "rgba(211,106,73,0.5)" : '#D36A49'};
border-radius: 50px;
display: flex;
justify-content: center;
align-items:center;
`;

export {
    PrimaryButton, SecondaryButton, NextButton
}