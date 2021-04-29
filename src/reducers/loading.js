import { ADD_WATCHERS, ADD_WATCHERS_FAILED, CHANGE_STATUS_SUBTASK, CHANGE_STATUS_SUBTASK_FAILED, CHANGE_STATUS_SUBTASK_SUCCESSFUL, CHECK_USERS_STATUS, CHECK_USERS_STATUS_FAILED, CHECK_USERS_STATUS_SUCCESSFUL, CREATE_AGENCY, CREATE_AGENCY_FAILED, CREATE_AGENCY_SUCCESSFUL, CREATE_LEAD, CREATE_LEAD_FAILED, CREATE_LEAD_SUCCESSFUL, DELETE_WATCHER, DELETE_WATCHER_FAILED, FETCH_AGENCIES, FETCH_AGENCIES_FAILED, FETCH_AGENCIES_SUCCESSFUL, GET_TASK_ACTIVITY, GET_TASK_ACTIVITY_FAILED, GET_TASK_ACTIVITY_SUCCESSFUL, GET_WATCHERS, GET_WATCHERS_FAILED, GET_WATCHERS_SUCCESSFUL } from "../actions/actionTypes";

const initialState = false;

const loaderReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_APP": {
			return true;
		}
		case "SEND_PHONE_NUMBER": {
			return true;
		}
		case "SEND_PHONE_NUMBER_SUCCESSFUL": {
			return false;
		}
		case "SEND_PHONE_NUMBER_FAILED": {
			return false;
		}
		case "VERIFY_OTP": {
			return true;
		}
		case "VERIFY_OTP_SUCCESSFUL": {
			return false;
		}
		case "VERIFY_OTP_FAILED": {
			return false;
		}
		case "LOGOUT": {
			return true;
		}
		case "LOGOUT_SUCCESSFUL": {
			return false;
		}
		case "LOGOUT_FAILED": {
			return false;
		}
		case "UPDATE_FULL_NAME": {
			return true;
		}
		case "UPDATE_FULL_NAME_SUCCESSFUL": {
			return false;
		}
		case "UPDATE_FULL_NAME_FAILED": {
			return false;
		}
		case "ONBOARDING_COMPLETE": {
			return true;
		}
		case "ONBOARDING_COMPLETE_SUCCESSFUL": {
			return false;
		}
		case "ONBOARDING_COMPLETE_FAILED": {
			return false;
		}
		case "CREATE_FUND_RAISER": {
			return true;
		}
		case "CREATE_FUND_RAISER_SUCCESSFUL": {
			return false;
		}
		case "CREATE_FUND_RAISER_FAILED": {
			return false;
		}
		case "CREATE_HELP_REQUEST": {
			return true;
		}
		case "CREATE_HELP_REQUEST_SUCCESSFUL": {
			return false;
		}
		case "CREATE_HELP_REQUEST_FAILED": {
			return false;
		}
		case "EDIT_FUND_RAISER": {
			return true;
		}
		case "EDIT_FUND_RAISER_SUCCESSFUL": {
			return false;
		}
		case "EDIT_FUND_RAISER_FAILED": {
			return false;
		}
		case "EDIT_HELP_REQUEST": {
			return true;
		}
		case "EDIT_HELP_REQUEST_SUCCESSFUL": {
			return false;
		}
		case "EDIT_HELP_REQUEST_FAILED": {
			return false;
		}
		case "SETUP_PROFILE": {
			return true;
		}
		case "SETUP_PROFILE_SUCCESSFUL": {
			return false;
		}
		case "SETUP_PROFILE_FAILED": {
			return false;
		}
		case "EDIT_PROFILE": {
			return true;
		}
		case "EDIT_PROFILE_SUCCESSFUL": {
			return false;
		}
		case "EDIT_PROFILE_FAILED": {
			return false;
		}
		case "ACTIVATE_USER_FEED": {
			return true;
		}
		case "ACTIVATE_USER_FEED_SUCCESSFUL": {
			return false;
		}
		case "ACTIVATE_USER_FEED_FAILED": {
			return false;
		}
		case "FETCH_ACTIVITIES": {
			return true;
		}
		case "FETCH_ACTIVITIES_SUCCESSFUL": {
			return false;
		}
		case "FETCH_ACTIVITIES_FAILED": {
			return false;
		}
		case CREATE_AGENCY: {
			return true;
		}
		case CREATE_AGENCY_SUCCESSFUL: {
			return false;
		}
		case CREATE_AGENCY_FAILED: {
			return false;
		}
		case CREATE_AGENCY: {
			return true;
		}
		case CREATE_AGENCY_SUCCESSFUL: {
			return false;
		}
		case CREATE_AGENCY_FAILED: {
			return false;
		}
		case FETCH_AGENCIES: {
			return true;
		}
		case FETCH_AGENCIES_SUCCESSFUL: {
			return false;
		}
		case FETCH_AGENCIES_FAILED: {
			return false;
		}
		case "FETCH_USER_FEED": {
			return true;
		}
		case "FETCH_USER_FEED_SUCCESSFUL": {
			return false;
		}
		case "FETCH_USER_FEED_FAILED": {
			return false;
		}
		case "CREATE_PAYMENT_INTENT": {
			return true;
		}
		case "CREATE_PAYMENT_INTENT_SUCCESSFUL": {
			return false;
		}
		case "CREATE_PAYMENT_INTENT_FAILED": {
			return false;
		}
		case "CREATE_PROJECT": {
			return true;
		}
		case "CREATE_PROJECT_SUCCESSFULL": {
			return false;
		}
		case "CREATE_PROJECT_FAILED": {
			return false;
		}
		case "CREATE_TASK": {
			return true;
		}
		case "CREATE_TASK_SUCCESSFULL": {
			return false;
		}
		case "CREATE_TASK_FAILED": {
			return false;
		}
		case "CHANGE_STATUS": {
			return true;
		}
		case "CHANGE_STATUS_SUCCESSFULL": {
			return false;
		}
		case "CHANGE_STATUS_FAILED": {
			return false;
		}
		case CHANGE_STATUS_SUBTASK: {
			return true;
		}
		case CHANGE_STATUS_SUBTASK_SUCCESSFUL: {
			return false;
		}
		case CHANGE_STATUS_SUBTASK_FAILED: {
			return false;
		}
		case "GET_USER_TRANSACTIONS": {
			return true;
		}
		case "GET_USER_TRANSACTIONS_SUCCESSFUL": {
			return false;
		}
		case "GET_USER_TRANSACTIONS_FAILED": {
			return false;
		}
		case "ONBOARDING_COMPLETE": {
			return true;
		}
		case "ONBOARDING_COMPLETE_SUCCESSFUL": {
			return false;
		}
		case "ONBOARDING_COMPLETE_FAILED": {
			return false;
		}
		case "UPDATE_FULL_NAME": {
			return true;
		}
		case "UPDATE_FULL_NAME_SUCCESSFUL": {
			return false;
		}
		case "UPDATE_FULL_NAME_FAILED": {
			return false;
		}
		case "EDIT_PROFILE": {
			return true;
		}
		case "EDIT_PROFILE_SUCCESSFUL": {
			return false;
		}
		case "EDIT_PROFILE_FAILED": {
			return false;
		}
		case "SET_META": {
			return true;
		}
		case "SET_META_SUCCESSFUL": {
			return false;
		}
		case "SET_META_FAILED": {
			return false;
		}
		case "UPDATE_PROFILE_PIC": {
			return true;
		}
		case "UPDATE_PROFILE_PIC_SUCCESSFUL": {
			return false;
		}
		case "UPDATE_PROFILE_PIC__FAILED": {
			return false;
		}
		case CREATE_LEAD: {
			return true;
		}
		case CREATE_LEAD_SUCCESSFUL: {
			return false;
		}
		case CREATE_LEAD_FAILED: {
			return false;
		}
		case GET_WATCHERS: {
			return true;
		}
		case ADD_WATCHERS: {
			return true;
		}
		case DELETE_WATCHER: {
			return true;
		}
		case GET_WATCHERS_SUCCESSFUL: {
			return false;
		}
		case GET_WATCHERS_FAILED: {
			return false;
		}
		case CHECK_USERS_STATUS: {
			return true;
		}
		case CHECK_USERS_STATUS_FAILED: {
			return false;
		}
		case CHECK_USERS_STATUS_SUCCESSFUL: {
			return false;
		}
		case DELETE_WATCHER_FAILED: {
			return false;
		}
		case ADD_WATCHERS_FAILED: {
			return false;
		}
		default: {
			return state;
		}
	}
};

export default loaderReducer;
