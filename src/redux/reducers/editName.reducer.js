const editName = (state = {}, action) => {
    if (action.type === 'SET_EDIT_NAME') {
        //action.payload is the object from the db
        return action.payload;
        //* 7. payload: { property: 'github_name', value: event.target.value }
    } else if (action.type === 'EDIT_ONCHANGE') {
        return {
            //spread => give me all of the object
            ...state,
            //change this one in particular
            [action.payload.property]: action.payload.value,
        };
        //! 8. this will clear the state
    } else if (action.type === 'EDIT_CLEAR') {
        return { github_name: '' };
    }
    return state;
};

export default editName;
