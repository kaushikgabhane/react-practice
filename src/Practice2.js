

function Practice2({myname, list,details}) {
    // console.log(props);
  return (
    <>
        This is a card
        <ul>
            <h1>{myname}</h1>
            <h1>{details.gender}</h1>
            <h1>{details.name?.first}</h1>
            {list.map( l => (
                <li key={l}>{l}</li>
            ))}
        </ul>
    </>
  )
}

export default Practice2