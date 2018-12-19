const defaultState={
	n:123,
	list:[],
	scroll:[],
	conent:[]
}
export default (state=defaultState,action)=>{
	
	switch(action.type){
		case 'HOME_DATA_FULFILLED':
			let newState = JSON.parse(JSON.stringify(state))
			newState.list=action.payload.data["106930"]['list'];
			return newState;
			break;
		case 'HOME_SCROLLNAV_FULFILLED':
			let scrollState = JSON.parse(JSON.stringify(state))
			scrollState.scroll=action.payload.data["122224"]['list'];
			return scrollState;
			break;
		case 'HOME_CONTENT_FULFILLED':
			let conState = JSON.parse(JSON.stringify(state))
			conState.conent=action.payload.data.list;
			return conState;
			break;
	}
	return state;
}