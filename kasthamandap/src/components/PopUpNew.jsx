import Popup from 'reactjs-popup';
const PopUpNew = () => {
    return (        
    <div>
        <h4>Popup - GeeksforGeeks</h4>
        <Popup trigger=
            {<button> Click to open popup </button>}
            position="right center">
            <div>GeeksforGeeks</div>
            <button>Click here</button>
        </Popup>
    </div>
    )
}

export default PopUpNew