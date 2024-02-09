function ResultList(props) {
  console.log("testing props")
  console.log(props)
    return (
      <ul className="list-group">
        <h1>Here be some info from the odds api, specifically Basketball Sport Titles </h1>
        {props.odds.map((odd) => (
          <li className="list-group-item" key={odd.id}>
            {odd.sport_title}
          </li>
        ))}
      </ul>
    );
  }
  
  export default ResultList;