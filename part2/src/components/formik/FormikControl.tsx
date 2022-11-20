import React from 'react';
import { Date } from './Date';
import { Input } from './Input';
import { InputProps } from './Types';

const FormikControl: React.FC<InputProps> = ({ control, ...rest }) => {
    switch (control) {
        case 'input':
            return <Input {...rest} />;
        case 'date':
            return <Date {...rest} />;

        default:
            return null;
    }
};

export default FormikControl;
