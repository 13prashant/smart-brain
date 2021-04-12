import './imageViewer.css'

const ImageViewer = ({ urlChange, box }) => {
    return (
        <div className='center mt2'>
            <div className='absolute'>
                <img
                    id='image-input'
                    style={{ maxWidth: '500px' }}
                    src={urlChange} alt='face'
                />
                <div style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
                    className='bounding-box'
                ></div>
            </div>
        </div>
    )
}

export default ImageViewer
