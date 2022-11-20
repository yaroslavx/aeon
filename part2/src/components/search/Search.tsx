import * as Yup from 'yup';
import React from 'react'
import { Form, Formik } from 'formik';
import FormikControl from '../formik/FormikControl';
import { SearchState } from '../../redux/search/searchTypes';
import { useSelector } from 'react-redux';
import { selectSearch } from '../../redux/search/searchSelector';
import { useAppDispatch } from '../../redux/store';
import { setFromDate, setFromLocation, setToDate, setToLocation } from '../../redux/search/searchSlice';
import { useNavigate } from 'react-router-dom';
import { StyledSearch, StyledSubmitButton } from './Search.styles';


const Search = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const initialValues: SearchState = {
        fromLocation: '',
        toLocation: '',
        fromDate: '',
        toDate: '',
    };

    const validationSchema = Yup.object({
        fromLocation: Yup.string().required('Required'),
        toLocation: Yup.string().required('Required'),
        fromDate: Yup.date().required('Required').nullable(),
        toDate: Yup.date().nullable(),
    });

    const onSubmit = (values: SearchState) => {
        dispatch(setFromLocation({ fromLocation: values.fromLocation }))
        dispatch(setToLocation({ toLocation: values.toLocation }))
        dispatch(setFromDate({ fromDate: values.fromDate }))
        dispatch(setToDate({ toDate: values.toDate }))
        sessionStorage.setItem('fromLocation', values.fromLocation)
        sessionStorage.setItem('toLocation', values.toLocation)
        sessionStorage.setItem('fromDate', values.fromDate)
        sessionStorage.setItem('toDate', values.toDate)


        navigate('info')


    };
    return (
        <StyledSearch>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(formik) => (
                    <Form className='form-container'>
                        <div className='fields-conteiner'>
                            <FormikControl
                                control='input'
                                type='text'
                                label='Откуда'
                                name='fromLocation'
                                placeholder='Город вылета'
                            />
                            <FormikControl
                                control='input'
                                type='text'
                                label='Куда'
                                name='toLocation'
                                placeholder='Город прилёта'
                            />

                            <FormikControl control='date' label='Date' name='fromDate' placeholder='дд.мм.гг' />
                            <FormikControl control='date' label='Date' name='toDate' placeholder='дд.мм.гг' />
                        </div>
                        <div className='buttons-conteiner'>
                            <StyledSubmitButton type='submit' disabled={!formik.isValid || !formik.dirty} >
                                Найти билеты
                            </StyledSubmitButton>
                        </div>
                    </Form>
                )
                }
            </Formik >
        </StyledSearch>

    )
}

export default Search