import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content">
                <div>
                    <DayPicker
                        mode="single"
                        styles={{
                            caption: { color: '#f00aab85' }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Calendar;