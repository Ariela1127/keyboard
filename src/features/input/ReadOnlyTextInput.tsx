import React from 'react';

interface ReadOnlyTextInputProps {
  value: string;
}

const ReadOnlyTextInput: React.FC<ReadOnlyTextInputProps> = ({ value }) => (
  <input
    className='w-2/5 h-8 py-2 px-3 border text-grey-darkest cursor-default'
    type='text'
    value={value}
    readOnly
  />
);

export default ReadOnlyTextInput;
