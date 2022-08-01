import { useDispatch, useSelector, useStore } from 'react-redux'
import { selectLogin } from '../../utils/selectors'
import { setEditFormState, sendNameData } from '../../utils/features/editNameForm'


function EditFormButton({ type, className, children, store, token }) {

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
                    dispatch(setEditFormState())
                }
            }}
            className={className}
        >
            {children}
        </button>
    )
}

export default EditFormButton