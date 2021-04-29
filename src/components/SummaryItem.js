import React from 'react';
import { Box } from '../styled-components/View';
import { P, Heading } from '../styled-components/Text';

const SummaryItem = ({ headingText, labelText, subText  }) => {
 return (
  <Box jc="space-evenly" style={{ minHeight: 184, maxHeight: 184, borderBottomWidth: 1, borderBottomColor: "#E5E5E5" }}>
   <Heading size="16px" lh="19px" color="#6C6C6C">{headingText}</Heading>  
   <Heading size="56px" lh="67px" color="#314743">{labelText}</Heading>  
   <P size="12px" lh="14px" color="#6C6C6C">{subText}</P>  
  </Box>
 )
}

export default SummaryItem;