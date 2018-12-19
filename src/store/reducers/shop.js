const defaultState={
	goodimg:[],
	goodinfo:[]
}
export default (state=defaultState,action)=>{
	switch(action.type){
		case "GOOD_INFO_FULFILLED":
			let newGoodInfo = JSON.parse(JSON.stringify(state))
			newGoodInfo.goodimg=action.payload.result.itemInfo.topImages;
			newGoodInfo.goodinfo=action.payload.result.itemInfo;
			return newGoodInfo;
			break;
	}
	return state;
}