import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './NavbarDetail.css';

//mui
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import Swal from 'sweetalert2';

export default function NavbarDetail({ item }) {
    const history = useHistory();
    const dispatch = useDispatch();

    function handleDelete() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                dispatch({
                    type: 'DELETE_ITEM',
                    payload: item.id,
                });
            }
        });
        history.push('/dashboard');
    }

    return (
        <div className="navbar-detail">
            <button
                className="navbar-home-button"
                onClick={() => {
                    history.push('/dashboard');
                }}
            >
                <ReplyRoundedIcon
                    style={{ fontSize: 60, color: 'limegreen' }}
                />
                Return
            </button>
            <button className="navbar-delete-button" onClick={handleDelete}>
                <DeleteForeverIcon style={{ fontSize: 60, color: 'maroon' }} />
                Delete
            </button>
        </div>
    );
}
