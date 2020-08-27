import {useState} from "react";

const useInputValue = (defaultValue = '') => {

    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
};

const hooks = {
    useInputValue
};

export default hooks;