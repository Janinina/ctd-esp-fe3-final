export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_DATA': 
            return{...state, data: action.payload}
        case 'ADD_FAVS':
            return{...state, favs: [...state.favs, action.payload]}
        case 'DELETE_FAV':
            const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload)
            return {...state, favs: filteredFavs}        
        case 'CHANGE_THEME':
            return{...state, theme: action.payload};
    }
}