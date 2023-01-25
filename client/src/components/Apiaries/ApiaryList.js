import ApiaryCard from './ApiaryCard';

const ApiaryList = ({ apiaryData, selectedApiary, setSelectedApiary }) => {

    if (!apiaryData) {
        return (
            <h3>Loading...</h3>
        )
    };

    const apiaryNodes = apiaryData.map((apiary, index) => {
        return <ApiaryCard 
                    key={index} 
                    index={index}
                    apiary={apiary} 
                    selectedApiary={selectedApiary} 
                    setSelectedApiary={setSelectedApiary}
                />
    })

    return (
        <div>
            {apiaryNodes}
        </div>
    )
};

export default ApiaryList;