
const  MapRecursive=({JsonData})=>{
    const renderNestedData = (data) => {
        return (
          <ul>
            {Object.entries(data).map(([key, value]) => (
              <li key={key}>
                <strong>{key}: </strong>
                {typeof value === 'object' ? (
                  renderNestedData(value)
                ) : (
                  value
                )}
              </li>
            ))}
          </ul>
        );
      };
      return (
        <div>
          <h1>Nested Data</h1>
          {renderNestedData(JsonData)}
        </div>
      );


}

export default MapRecursive