import { useState } from 'react'
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import ImageViewer from './components/ImageViewer/ImageViewer';
import Clarifai from 'clarifai'

// Clarifai
const app = new Clarifai.App({
  apiKey: 'a65987dcb24a4d79bd58e3436249d61c'
})

// Particles
const particleParams = {
  particles: {
    number: {
      value: 70
    },
    size: {
      value: 1
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
      }
    }
  }
}

function App() {

  const [input, setInput] = useState('')
  const [url, setUrl] = useState('')
  const [box, setBox] = useState({})

  // Input
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const faceBoxCalculation = (data) => {
    const clarifaiData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('image-input')
    const width = Number(image.width)
    const height = Number(image.height)

    return {
      topRow: height * clarifaiData.top_row,
      rightCol: width - (width * clarifaiData.right_col),
      bottomRow: height - (height * clarifaiData.bottom_row),
      leftCol: width * clarifaiData.left_col
    }
  }

  const boxDisplay = (box) => {
    setBox(box)
  }

  // Button
  const handleButtonSubmit = () => {
    setUrl(input)
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
      .then(data => boxDisplay(faceBoxCalculation(data)))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <Particles className='particles'
        params={particleParams}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        inputChange={handleInputChange}
        buttonSubmit={handleButtonSubmit}
      />
      <ImageViewer
        urlChange={url}
        box={box}
      />
    </div>
  );
}

export default App;
