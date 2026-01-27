import React from 'react';

const types = {
    email: {
        regex:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido',
    }
}

const useUserForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value) {  
        if(type === false) return true;
        if(types[type]) {
            if(value.length === 0) {
                setError('Preencha um valor.');
                return false;
            } else if(!types[type].regex.test(value)) {
                setError(types[type].message);
                return false;
            } else {
                setError(null);
                return true;
            }
        }
        return true;
    }

    function onChange({ target }) { 
        validate(target.value); 
        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        validate: () => validate(value),
        onBlur: () => validate(value),
        error,
    };
};

export default useUserForm;