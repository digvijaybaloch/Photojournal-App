import { } from '../actions/actionTypes';

const initialState = {
 user: null,
 // streamClient: chatClient,
 profilePicUploadProgress: 0
};

const user = (state = initialState, action) => {
 switch (action.type) {
  case 'GET_USER_SUCCESSFUL': {
   return {
    ...state,
    user: {
     ...action.payload
    },
   };
  }
  case 'GET_WALLET_SUCCESSFUL': {
   return {
    ...state,
    user: {
     ...state.user,
     wallet: action.payload.wallet
    },
   };
  }
  case 'CHECK_BANK_VERIFICTAION_SUCCESSFUL': {
   return {
    ...state,
    user: {
     ...state.user,
     bankVerified: action.payload.verified
    },
   };
  }
  case 'GET_USER_FAILED': {
   return {
    ...state,
    user: null
   };
  }
  case 'SET_STREAM_CLIENT': {
   return {
    ...state,
    streamClient: action.payload
   }
  }
  case 'ONBOARDING_COMPLETE_SUCCESSFUL': {
   return {
    ...state,
    user: {
     ...state.user,
     onboardingStep: action.payload.step
    }
   }
  }
  case 'UPDATE_FULL_NAME_SUCCESSFUL': {
   return {
    ...state,
    user: {
     ...state.user,
     fullName: action.payload.name,
    }
   }
  }
  case 'SETUP_PROFILE_SUCCESSFUL': {
   return {
    ...state,
    user: {
     ...state.user,
     onboardingStep: 1
    }
   }
  }
  case 'ACTIVATE_USER_FEED_SUCCESSFUL': {
   return {
    ...state,
    user: {
     ...state.user,
     feedActive: true
    }
   }
  }
  case 'UPLOAD_TASK_S3_PROFILE_PIC_PROGRESS': {
   return {
    ...state,
    profilePicUploadProgress: action.payload.progress
   }
  }
  case 'UPDATE_PROFILE_PIC_SUCCESSFUL': {
   return {
    ...state,
    user: {
     ...state.user,
     profilePic: action.payload.profilePic,
    },
    profilePicUploadProgress: 0,
   }
  }
  case "GET_STREAM_USER_AND_TOKEN_SUCCESSFUL": {
   return {
    ...state,
    user: {
     ...state.user,
     streamUser: action.payload.streamUser,
     streamToken: action.payload.streamToken,
    },
   }
  }
  default: {
   return state;
  }
 }
};

export default user;