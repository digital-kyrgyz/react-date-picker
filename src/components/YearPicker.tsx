import React, {useState} from "react";
import { IDatePickerProps } from "../interfaces";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.css";

function YearPicker({sendDataToParent}: IDatePickerProps) {
    const [selectYear, setSelectedYear] = useState<Date | null> (null);

    const minYear = new Date().getFullYear() - 32;
    const maxYear = new Date().getFullYear();

    const handleYearChange = (date: Date | null) => {
        sendDataToParent(date);
        setSelectedYear(date);
    };
    return(
        <div>
            <DatePicker
                selected={selectYear}
                onChange={handleYearChange}
                dateFormat="yyyy"
                showYearPicker
                className="form-control"
                minDate={new Date(minYear, 0, 1)}
                maxDate={new Date(maxYear, 11, 31)}
            />
        </div>
    )
}
export default YearPicker;