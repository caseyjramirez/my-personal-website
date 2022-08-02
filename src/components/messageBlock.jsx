let bikeImage = require('../img/me/bike.PNG')
const gradient = require('../img/gradient.jpg')

const messageBlock = () => {
    return (
        <div className="scroll-child">        
            <div className="message">
                <div className="img-grid">
                    <img className='grid-image' src={gradient} alt="bike" />
                    <img className='grid-image' src={gradient} alt="bike" />
                    <div className="image-space"></div>
                    
                    <img className='grid-image' src={gradient} alt="bike" />
                    <div className="image-space"></div>
                    <img className='grid-image' src={gradient} alt="bike" />
                    
                    <div className="image-space"></div>
                    <img className='grid-image' src={gradient} alt="bike" />
                    <div className="image-space"></div>
                </div>

                <p>hi, my name is <span className='bold' >casey</span> 👋</p>
            </div>
        </div>
    );
}
 
export default messageBlock;