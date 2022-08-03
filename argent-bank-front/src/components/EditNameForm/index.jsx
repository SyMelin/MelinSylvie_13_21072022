import EditNameInput from '../../components/EditNameInput'
import EditNameFormButton from '../../components/EditNameFormButton'
import '../../styles/EditNameForm.css'

function EditNameForm() {
    return (
        <form>
            <div className='form-inputs'>
                <EditNameInput
                    id={'firstname'}
                    formEntry={'firstName'}
                />
                <EditNameInput
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