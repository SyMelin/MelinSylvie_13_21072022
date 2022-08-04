import { useDispatch } from 'react-redux'
import { setEditNameFormState, sendNameData } from '../../utils/features/editNameForm'
import './EditNameFormButton.css'


/**
 * EditNameFormButton properties
 * 
 * @typedef { Object } EditNameFormButtonProps
 * @prop { String } type - type of the button
 * @prop { String } className
 * @prop { String } children - text to display on the button
 */
/**
 * React component: EditNameFormButton
 * 
 * @type { React.FC<EditNameFormButtonProps> }
 * @returns { React.ReactElement }
 */
function EditNameFormButton({ type, className, children }) {

    const dispatch = useDispatch()

    return (
        <button
            onClick={(e) => {
                e.preventDefault()
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