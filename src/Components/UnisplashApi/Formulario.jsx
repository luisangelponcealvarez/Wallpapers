export function Formulario({ handleSearch }) {
  return (
    <>
      <form onSubmit={handleSearch} className="form d-flex">
        <input
          name="search"
          type="text"
          className="form-control rounded m-2"
          placeholder="Search"
          aria-label="Search"
        />

        <button className="btn btn-outline-secondary rounded" type="submit">
          Search
        </button>
      </form>
    </>
  );
}
