function FilterName(props) {
  const handleInput = (ev) => {
    props.handleFilter(ev.currentTarget.value);
  };
  return (
    <>
      <input
        className="repo-input"
        type="text"
        placeholder="Find a repository"
        value={props.filterName}
        onChange={handleInput}
      />
    </>
  );
}

export default FilterName;
