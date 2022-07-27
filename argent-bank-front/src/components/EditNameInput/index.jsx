import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectEditNameForm } from '../../utils/selectors'
import { setInputValue } from '../../utils/features/editNameForm'

function EditNameInput ({ id }) {

    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    //const userData = user.data
    const editNameForm = useSelector(selectEditNameForm);
    const editNameFormInput = editNameForm[id]

    return (
        <div className="input-wrapper">
            <label htmlFor={`user${id[0].toUpperCase()}${id.slice(1)}`} className="sr-only">{id[0].toUpperCase() + id.slice(1)}</label>
            <input
                type='text'
                id={`user+${id[0].toUpperCase()}${id.slice(1)}`}
                placeholder={`user${id[0].toUpperCase()}${id.slice(1)}`}
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