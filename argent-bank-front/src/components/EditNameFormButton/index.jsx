import { useDispatch } from 'react-redux'
import { setEditNameFormState, sendNameData } from '../../utils/features/editNameForm'
import '../../styles/EditNameFormButton.css'

function EditNameFormButton({ type, className, children, store, token }) {

    const dispatch = useDispatch()

    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                //console.log('AVANT sendNameData ', editNameForm.editNameData)
                if (type === 'sendEditedData') {
                    sendNameData(store, token)
                }
                else {
                    dispatch(setEditNameFormState())
                }
            }}
            className={className}
        >
            {children}
        </button>
    )
}

export default EditNameFormButton