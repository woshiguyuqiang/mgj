const eventList={};
const $on=function(name,fn){
	if(!eventList[name]){
		eventList[name]=[];
		if(!eventList[name][fn]){
			eventList[name].push(fn)
		}
	}
}
const $emit=function(name,value){
	eventList[name].forEach((item)=>{
		item(value);
	})
}
export default{
	$on,$emit
}