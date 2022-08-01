import EditNameInput from '../../components/EditNameInput'
import EditFormButton from '../../components/EditFormButton'

function EditNameForm( ) {
    return (
        <form>
                <div className='form-inputs'>
                    <EditNameInput id={'firstname'} />
                    <EditNameInput id={'lastname'} />
                </div>
                <div className='form-buttons'>
                    <EditFormButton type='sendEditedData' className='form-button' children='Save' />
                    <EditFormButton type='cancelEdit' className='form-button' children='Cancel' />
                </div>
            </form>
    )
}

export default EditNameForm

/*
<button
                        onClick={(e) => {
                            e.preventDefault()
                            //console.log('AVANT sendNameData ', editNameForm.editNameData)
                            sendNameData(store, token)
                        }}
                        className="form-button"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => {dispatch(setEditFormState())}}
                        className="form-button"
                    >
                        Cancel
                    </button>
*/