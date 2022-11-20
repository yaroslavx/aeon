import { ErrorMessage, Field } from 'formik';
import React, { useState } from 'react';
import { StyledFieldContainer } from './field.styles';
import { TextError } from './TextError';
import { InputProps } from './Types';



export const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <StyledFieldContainer>
            <label className='label' htmlFor={name}>{label}</label>
            <Field className='field' id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </StyledFieldContainer>
    );
};
