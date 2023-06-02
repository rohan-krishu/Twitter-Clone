import React from 'react';
import SignUpPage from '../SignUpPage';

export default function DateSelect() {
    function getDate() {
        let monthDays = [];
        for (let i = 1; i <= 31; i++) {
            monthDays.push(i);
        }
        return monthDays;
    }

    const monthDays = getDate();

    return (
        <div>
            {monthDays.map((item) => (
                <>
                    <SignUpPage date = {item}/>
                </>

            ))}
        </div>
    );
}
