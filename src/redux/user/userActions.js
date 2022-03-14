// import { endpoint, metadataarray } from "../../config/Config"
import {
	USER_DATA,
	REGISTER_DATA
} from "./userTypes"

export const fetchData = () => {
	return dispatch => {
		dispatch(fetchDataRequest())
		Promise.all([
			fetch(endpoint).then(response => response.json()),
			fetch(metadataarray).then(resmeta => resmeta.json()),
		])
			.then(([response, resmeta]) => {
				dispatch(fetchDataSuccess(merged))
			})
			.catch(error => {
				dispatch(fetchDataFailure(error.message))
			})
	}
}

export const fetchDataRequest = () => {
	return {
		type: FETCH_DATA_REQUEST,
	}
}

export const fetchDataSuccess = data => {
	return {
		type: FETCH_DATA_SUCCESS,
		payload: data,
	}
}

export const fetchDataFailure = error => {
	return {
		type: FETCH_DATA_FAILURE,
		payload: error,
	}
}
