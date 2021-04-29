import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { LoaderBackground, LoaderWrapper } from '../styled-components/View';

const Loader = props => {
 return (
  <Modal 
   transparent={true}
   animationType={'fade'}
   visible={props.loading}
   onRequestClose={() => {console.log('close modal')}}>
   <LoaderBackground >
    <LoaderWrapper >
     <ActivityIndicator animating={props.loading} size={"large"} />
    </LoaderWrapper>
   </LoaderBackground>
  </Modal>
 )
}

export default Loader;