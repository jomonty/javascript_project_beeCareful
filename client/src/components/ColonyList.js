import ColonyCard from "./ColonyCard"

const ColonyList = ({apiaryData}) => {


    

    const colonyNodes = apiaryData[0].colonies.map((colony,index) => {
        return <ColonyCard colony={colony} key={index}/>
    })
    


    return (
        <>
            <ul>
                {colonyNodes}
            </ul>
       
        </>
    )
}

export default ColonyList