/* eslint-disable */
import './ApiaryCard.css';

const ApiaryCard = ({ index, apiary, selectedApiary, setSelectedApiary }) => {

    const handleClick = () => {
        setSelectedApiary(index);
    };

    return (
        <div className="container">
            <div className="card">
                <div className="box">
                    <div className="content">

                        <h3>{apiary.name}</h3>
                        <p>Address: {apiary.address}</p>                        
                        <button onClick={handleClick}><a href="#">Select</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApiaryCard;





    // <ul key={index} className={index === selectedApiary ? "class-name-true" :  "class-name-false"}>
        //     <li>
        //     <h3>Apiary Name: {apiary.name}</h3>
        //     <p>Address: {apiary.address}</p>
        //     <button onClick={handleClick}>Select</button>
        //     </li>
        // </ul>