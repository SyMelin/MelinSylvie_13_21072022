import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectEditNameForm } from '../../utils/selectors'
import { setTextInputValue } from '../../utils/features/editNameForm'
import './EditNameFormTextInput.css'

function EditNameFormTextInput ({ id, formEntry }) {

    const dispatch = useDispatch()
    const userData = useSelector(selectUser).data
    const editNameFormError = useSelector(selectEditNameForm).error
    const firstLetterToUppercase = (string) => (`${string[0].toUpperCase()}${string.slice(1)}`)

    useEffect (() => {
        dispatch(setTextInputValue('firstName', userData.firstName))
        dispatch(setTextInputValue('lastName', userData.lastName))
    }, [dispatch, userData])

    return (
        <div className="input-wrapper">
            <label htmlFor={`user${firstLetterToUppercase(id)}`} className="sr-only">{firstLetterToUppercase(id)}</label>
            <input
                type='text'
                id={`user${firstLetterToUppercase(id)}`}
                placeholder={`${firstLetterToUppercase(id)}`}
                defaultValue={userData[formEntry]}
                onChange={(e) => {dispatch(setTextInputValue(formEntry, e.target.value))}}
            />
            { editNameFormError[formEntry]
            ? <span className="form-inputError">The name should begins with an upper-case letter<br /> Ex: Robert Downey Jr.</span>
            : null
            }
        </div>
    )
}

export default EditNameFormTextInput