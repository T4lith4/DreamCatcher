import { GET_DREAMS, ADD_DREAM, DELETE_DREAM, DREAMS_LOADING, EDIT_DREAM} from '../actions/types';
//where the actual state goes and where we check our actions
const initialState = {
    dreams : [ ],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DREAMS :
            return {
                ...state,
                dreams: action.payload,
                loading: false
            };
        case DELETE_DREAM :
            return {
                ...state,
                dreams: state.dreams.filter(dream =>
                    dream._id !== action.payload)
            }
            case ADD_DREAM :
                return {
                    ...state,
                dreams: [action.payload, ...state.dreams]
                }
             case DREAMS_LOADING :
                return {
                    ...state,
                loading: true
                }
            case EDIT_DREAM:
            return {
                ...state,
            dreams: state.dreams.filter(dream =>
                dream.id !== action.payload)
            } 
        default:
            return state;
    }
}