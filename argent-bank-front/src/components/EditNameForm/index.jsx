import EditNameInput from '../../components/EditNameInput'
import EditNameFormButton from '../../components/EditNameFormButton'

function EditNameForm() {
    return (
        <form>
            <div className='form-inputs'>
                <EditNameInput id={'firstname'} />
                <EditNameInput id={'lastname'} />
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