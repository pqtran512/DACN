import React, {memo, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({width}) => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
        selected={startDate} 
        onChange={(date) => setStartDate(date)}
        dateFormat='dd/MM/yyyy'
        minDate={new Date()}
        className={`${width} cursor-pointer p-1 outline outline-2 outline-[#DAE0E6] rounded focus:outline-[#5E9ED6]`}
    />
  );
}

export default memo(Datepicker)
