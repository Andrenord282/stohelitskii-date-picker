import { useState, ChangeEvent } from 'react';

type InputChangeState = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onReset: () => void;
    setValue: React.Dispatch<React.SetStateAction<string>>;
};

const useInputChange = (initialValue: string): InputChangeState => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onReset = () => {
        setValue('');
    };

    return {
        value,
        onChange,
        onReset,
        setValue,
    };
};

export { useInputChange };
