import { ErrorMessage, Field, FieldProps } from 'formik';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import { TextError } from './TextError';
import { InputProps } from './Types';
import { useSelector } from 'react-redux';
import { selectSearch } from '../../redux/search/searchSelector';
import { StyledFieldContainer } from './field.styles';
import { createGlobalStyle } from 'styled-components';
import { HiOutlineCalendar } from 'react-icons/hi'

export const Date: React.FC<InputProps> = ({ label, name, ...rest }) => {
    const [focus, setFocus] = useState(false)
    return (
        <StyledFieldContainer>
            <label className='label' htmlFor={name}>{label}</label>
            <Field className='field' name={name}>
                {(props: FieldProps) => {
                    const { setFieldValue } = props.form;
                    const { value } = props.field;
                    return (
                        <>
                            <DateView

                                // wrapperClassName='field'
                                dateFormat="dd.MM.yy"
                                className='field date'
                                placeholderText={'дд.мм.гг'}
                                onCalendarOpen={() => setFocus(prev => !prev)}
                                onCalendarClose={() => setFocus(prev => !prev)}
                                id={name}
                                {...props.field}
                                {...rest}
                                selected={value}
                                onChange={(val) => setFieldValue(name, val)}
                            />
                            <HiOutlineCalendar className={focus ? 'icon focus' : 'icon'} />
                        </>
                    );

                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </StyledFieldContainer >
    );
};
