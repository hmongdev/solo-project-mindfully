import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProfileEdit(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const editName = useSelector((store) => store.editName);
    const { id } = useParams();

    //! 6. PUT input
    function handleChange(event, property) {
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: property, value: event.target.value },
        });
    }

    function handleSubmitName(event) {
        event.preventDefault();
        // PUT REQUEST
        axios
            .put(`/history/${id}`, editName)
            .then((response) => {
                // clean up reducer data
                dispatch({ type: 'EDIT_CLEAR' });
                // refresh will happen with useEffect on Home
                history.push('/'); // back to list
            })
            .catch((error) => {
                console.log('error on PUT: ', error);
            });
    }

    return (
        <>
            <h2>Edit Student</h2>
            {/* //! 5. Message here */}
            <p>
                We're editing this student: {editName.github_name} with id:
                {editName.id}
            </p>
            <form onSubmit={handleSubmitName}>
                <input
                    onChange={(event) => handleChange(event, 'github_name')}
                    placeholder="GitHub username"
                    value={editName.github_name} //! important!
                />
                <input type="submit" value="Update Student" />
            </form>
        </>
    );
}
