import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

export default function HistoryDetail() {
    const detail = useSelector((store) => store.detail);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_DETAIL',
            payload: id,
        });
    }, []);

    return (
        <>
            <p className="view-title">Date</p>
            <h1>I felt...</h1>
            <p>{detail[0].feeling}</p>

            <h1>What happened that day...</h1>
            <p>{detail[0].reflection}</p>

            <h1>I was grateful for...</h1>
            <ol>
                <li>{detail[0].gratitude1}</li>
                <li>{detail[0].gratitude2}</li>
                <li>{detail[0].gratitude3}</li>
            </ol>
            <Navbar />
        </>
    );
}
