import './index.css';
import QR from './images/image-qr-code.png'

function App() {
  return (
      <div className='card'>
          <img src={QR} alt={'qrCode'}/>
          <h3>
              Improve your front-end skills by building projects
          </h3>
          <p>
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
      </div>
  );
}

export default App;
