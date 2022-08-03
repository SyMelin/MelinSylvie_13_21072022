import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectEditNameForm } from '../../utils/selectors'
import { setInputValue } from '../../utils/features/editNameForm'
import '../../styles/EditNameInput.css'

function EditNameInput ({ id, formEntry }) {

    const dispatch = useDispatch()
    const userData = useSelector(selectUser).data
    const editNameFormError = useSelector(selectEditNameForm).error
   // const error = editNameForm.error
    const firstLetterToUppercase = (string) => (`${string[0].toUpperCase()}${string.slice(1)}`)

    useEffect (() => {
        dispatch(setInputValue('firstName', userData.firstName))
        dispatch(setInputValue('lastName', userData.lastName))
    }, [dispatch, userData])

    return (
        <div className="input-wrapper">
            <label htmlFor={`user${firstLetterToUppercase(id)}`} className="sr-only">{firstLetterToUppercase(id)}</label>
            <input
                type='text'
                id={`user${firstLetterToUppercase(id)}`}
                placeholder={`${firstLetterToUppercase(id)}`}
                defaultValue={userData[formEntry]}
                onChange={(e) => {dispatch(setInputValue(formEntry, e.target.value))}}
            />
            { editNameFormError[formEntry]
            ? <span className="form-inputError">The name should begins with an upper-case letter<br /> Ex: Robert Downey Jr.</span>
            : null
            }
        </div>
    )
}

export default EditNameInput