import './ApiaryCard.css';

const ApiaryCard = ({index, apiary, selectedApiary, setSelectedApiary}) => {

    const handleClick = () => {
        setSelectedApiary(index);
    };

    return (
        <div className={index === selectedApiary ? "class-name-true" :  "class-name-false"}>
            <h3>Apiary Name: {apiary.name}</h3>
            <p>Address: {apiary.address}</p>
            <button onClick={handleClick}>Select</button>
        </div>
    )
}

export default ApiaryCard;