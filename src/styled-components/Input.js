import styled from 'styled-components/native'

const AppInput = styled.TextInput`
 width: 80%;
 height: 48px;
 background: white;
 border-style: solid;
 border-width: 0px;
 border-radius: 8px;
 padding-left: ${({ pl }) => pl || '0%'};
 padding-right: ${({ pr }) => pr || '0%'};
 padding-top: ${({ pt }) => pt || '0px'};
 padding-bottom: ${({ pb }) => pb || '0px'};
 margin-top: ${({ mt }) => mt || '0px'};
 margin-bottom: ${({ mb }) => mb || '0px'};
 margin-left: ${({ ml }) => ml || '0px'};
 margin-right: ${({ mr }) => mr || '0px'};
`;

const OtpInput = styled.TextInput`
 border-bottom-width: 2px;
 border-color: #1D1B1C;
 border-style: solid;
 width: 25px;
 color:#1D1B1C;
 text-align:center;
 font-size: 24px;
 height:30px;
`;

const CardInput = styled.TextInput`
 background: #FFFFFF;
 border-radius: 8px;
 font-size: 12px;
 width: ${({ width }) => width || '90%'};
 margin-top: ${({ mt }) => mt || '18px'};
 height: 38px;
 padding: 4px 12px;
`;

export {
 AppInput, OtpInput, CardInput
}

