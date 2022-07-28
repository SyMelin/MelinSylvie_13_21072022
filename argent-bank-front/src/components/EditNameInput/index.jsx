import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectEditNameForm } from '../../utils/selectors'
import { setInputValue } from '../../utils/features/editNameForm'

function EditNameInput ({ id }) {

    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    //const userData = user.data
    //const editNameForm = useSelector(selectEditNameForm);
    //const editNameFormInput = editNameForm[id]

    const firstLetterToUppercase = (string) => (`${string[0].toUpperCase()}${string.slice(1)}`)

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