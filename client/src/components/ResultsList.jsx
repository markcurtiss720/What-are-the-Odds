function ResultList(props) {
    return (
      <ul className="list-group">
        {props.odds?.map((odd) => (
          <li className="list-group-item" key={odd.id}>
            {odd.sport_title}
          </li>
        ))}
      </ul>
    );
  }
  
  export default ResultList;