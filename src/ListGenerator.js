function ListGenerator(props) {
  const list = props.list;

  function GenerateList(list) {
    return list.map((element) => <li key={element}>{element}</li>);
  }

  return (
    <div className="grid-item" id="list">
      <p>The following boxes are selected:</p>
      <ul id="ul">{GenerateList(list)}</ul>
    </div>
  );
}

export default ListGenerator;
