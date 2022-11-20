import { ErrorMessageProps } from 'formik';
import React, { ReactNode } from 'react';
import { StyledError } from './field.styles';

interface Props {
    children?: ReactNode
}

export const TextError: React.FC<Props> = ({ children }) => {

    return <StyledError>{children}</StyledError>;
};
