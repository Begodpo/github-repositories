import FilterName from "./FilterName";

const Filters = (props) => {
  return (
    <form>
      <FilterName
        handleFilter={props.handleFilter}
        filterName={props.filterName}
      />
    </form>
  );
};

export default Filters;
