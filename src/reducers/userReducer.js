const initialState = {
   user: null,
 };
 
 const userReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'REGISTER':
       return {
         ...state,
         user: action.payload,
       };
     case 'LOGIN':
       return {
         ...state,
         user: action.payload,
       };
     case 'LOGOUT':
       return {
         ...state,
         user: null,
       };
     default:
       return state;
   }
 };
 
 export default userReducer;