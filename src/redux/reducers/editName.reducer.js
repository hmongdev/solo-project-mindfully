// const editName = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_EDIT_NAME':
//             return action.payload;
//         case 'EDIT_ONCHANGE':
//             return {
//                 //spread => give me all of the object
//                 ...state,
//                 //change this one in particular
//                 [action.payload.property]: action.payload.value,
//             };
//         case 'EDIT_CLEAR':
//             return {};
//         default:
//             return state;
//     }
// };

// export default editName;
