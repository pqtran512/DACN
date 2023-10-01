import React, {memo, useState} from 'react';
import Select from 'react-select';

const SelectInput = ({style, placeholder, options}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Select
        className={`cursor-pointer ${style}`}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={placeholder? placeholder : 'Chọn...'}
    />
  );
}

export default memo(SelectInput)
