const defaultState={
	goodtitle:[],
	goodcontent:[]
}
export default (state=defaultState,action)=>{

	switch(action.type){
		case "GOOD_TITLE_FULFILLED":
			let newgoodtitle = JSON.parse(JSON.stringify(state))
			newgoodtitle.goodtitle=action.payload.data['117330'].list;
			return newgoodtitle;
			break;
		case "GOOD_CONTENT_FULFILLED":
			let newgoodcontent = JSON.parse(JSON.stringify(state))
			newgoodcontent.goodcontent=action.payload.data.list;
			return newgoodcontent;
			break;
	}
	return state;
}