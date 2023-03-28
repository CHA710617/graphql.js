export const Category = ({ handleClick, categories }) => {
    return (
      <>
        {categories === undefined ? (
          <></>
        ) : (
          <div className="category-wrapper">
            {categories.edges.map((edge) => {
              return (
                <button
                  key={edge.node.id}
                  className="category"
                  onClick={handleClick}
                >
                  <div>{edge.node.name}</div>
                </button>
              );
            })}
          </div>
        )}
      </>
    );
  };