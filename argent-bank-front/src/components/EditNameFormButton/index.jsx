import { useDispatch } from 'react-redux'
import { setEditNameFormState, sendNameData } from '../../utils/features/editNameForm'
import '../../styles/EditNameFormButton.css'

function EditNameFormButton({ type, className, children }) {

    const dispatch = useDispatch()

    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                //console.log('AVANT sendNameData ', editNameForm.formData)
                if (type === 'sendEditedData') {
                    dispatch(sendNameData(e))
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