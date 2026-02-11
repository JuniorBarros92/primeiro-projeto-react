import { number } from 'prop-types';
import React from 'react';

const types = {
    email: {
        regex:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email válido',
    },
     password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.',
  },
number: {
    regex: /^\d+$/,
    message: 'Utilize apenas números.',
  },

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

    const onChange = React.useCallback(({ target }) => { 
        validate(target.value); 
        setValue(target.value);
    }, []);

    const onBlur = React.useCallback(() => validate(value), [value]);

    return {
        value,
        setValue,
        onChange,
        validate: () => validate(value),
        onBlur,
        error,
    };
};

export default useUserForm;