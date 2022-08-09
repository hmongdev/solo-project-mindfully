import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Navbar/Navbar.css';
import '../Dashboard/Dashboard.css';
import Navbar from '../Navbar/Navbar';
import { useHistory } from 'react-router-dom';

export default function Dashboard({ code }) {
    const historyList = useSelector((store) => store.historyList);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'FETCH_HISTORY',
        });
    }, []);

    const handleHistoryDetail = (id) => {
        dispatch({
            type: 'FETCH_DETAIL',
            payload: id,
        });
        history.push(`/detail/${id}`);
    };

    return (
        <div>
            <p className="view-title">Dashboard</p>
            <table className="dashboard-container rounded">
                {historyList.map((detail, i) => {
                    return (
                        <tbody key={i}>
                            <tr
                                key={detail.id}
                                onClick={() => handleHistoryDetail(detail.id)}
                            >
                                <td className="emoji">{detail.feeling}</td>
                                <td className="date">{detail.created}</td>
                                <td className="reflection">
                                    {detail.reflection}
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
            <Navbar />
        </div>
    );
}
