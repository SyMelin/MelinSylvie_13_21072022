import EditNameFormTextInput from '../../components/EditNameFormTextInput'
import EditNameFormButton from '../../components/EditNameFormButton'
import './EditNameForm.css'


/**
 * React component: EditNameForm
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function EditNameForm() {
    return (
        <form>
            <div className='form-inputs'>
                <EditNameFormTextInput
                    id={'firstname'}
                    formEntry={'firstName'}
                />
                <EditNameFormTextInput
                    id={'lastname'}
                    formEntry={'lastName'}
                />
            </div>
            <div className='form-buttons'>
                <EditNameFormButton
                    type="sendEditedData"
                    className="form-button"
                    children="Save"
                />
                <EditNameFormButton
                    type="cancelEdit"
                    className="form-button"
                    children="Cancel"
                />
            </div>
        </form>
    )
}

export default EditNameForm