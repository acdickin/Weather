import {FETCH_WEATHER} from '../actions/index'
export default function(state=[], action){
	switch(action.type){
	case FETCH_WEATHER:
		//return  state.concat([action.payload.data]);
		// dont mutate state like a push or state.tommrow.weater =weather
		// use new obejct to replace
		return[action.payload.data, ...state]
	}
	return state;
}