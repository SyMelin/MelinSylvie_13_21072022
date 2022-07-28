import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectEditNameForm } from '../../utils/selectors'
import { setInputValue } from '../../utils/features/editNameForm'

function EditNameInput ({ id }) {

    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const firstLetterToUppercase = (string) => (`${string[0].toUpperCase()}${string.slice(1)}`)

    useEffect (() => {
        dispatch(setInputValue('firstName', user.data.firstName))
        dispatch(setInputValue('lastName', user.data.lastName))
    }, [dispatch, user])

    return (
        <div className="input-wrapper">
            <label htmlFor={`user${firstLetterToUppercase(id)}`} className="sr-only">{firstLetterToUppercase(id)}</label>
            <input
                type='text'
                id={`user+${firstLetterToUppercase(id)}`}
                placeholder={`${firstLetterToUppercase(id)}`}
                defaultValue={id === "firstname"
                    ? user.data.firstName
                    : id === "lastname" 
                        ? user.data.lastName
                        : ""
                }
                onChange={(e) => {
                    let formEntry = ""
                    if (id === "firstname") {
                        formEntry = "firstName"
                    }
                    if (id === "lastname") {
                        formEntry = "lastName"
                    }
                    dispatch(setInputValue(formEntry, e.target.value))
                }}
            />
        </div>
    )
}

export default EditNameInput