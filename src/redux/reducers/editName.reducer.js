const editName = (state = {}, action) => {
    if (action.type === 'SET_EDIT_NAME') {
        return action.payload;
    } else if (action.type === 'EDIT_ONCHANGE') {
        return {
            //spread => give me all of the object
            ...state,
            //change this one in particular
            [action.payload.property]: action.payload.value,
        };
    } else if (action.type === 'EDIT_CLEAR') {
        return {};
    }
    return state;
};

export default editName;
