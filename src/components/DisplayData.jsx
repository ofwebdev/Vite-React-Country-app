const styles = {
  card: {
    background: "#5f5f5c",
    padding: "10px",
    margin: "5px",
  },
};

function DisplayData(props) {
  return (
    <div style={styles.card}>
      <h2>{props.name}</h2>
      <h4>{props.population}</h4>
      <h4>Area of state {props.area}</h4>
      <img src={props.flags} />
      <p>
        <strong>continents : {props.continents}</strong>
      </p>

      <a href={props.maps}>Maps</a>
    </div>
  );
}

export default DisplayData;
