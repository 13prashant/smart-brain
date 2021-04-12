import './imageLinkForm.css'
const ImageLinkForm = ({ inputChange, buttonSubmit }) => {
    return (
        <div>
            <p>This Magic Brain will detect faces in your pictures. Give it a try.</p>
            <div className='form pa3 w-40 center'>
                <input
                    onChange={inputChange}
                    className='pa1 w-70' type="text"
                />
                <button
                    onClick={buttonSubmit}
                    className='w-30 grow bg-blue white ba'
                >Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm
