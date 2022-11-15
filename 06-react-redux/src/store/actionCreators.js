import * as actionType from "./constancs";

export const addAction = count => ({
	type: actionType.ADD_NUMBER,
	count
})
export const subAction = count => ({
	type: actionType.SUB_NUMBER,
	count
})