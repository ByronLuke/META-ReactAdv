function DessertsList({ data }) {
    // Implement the component here.
    const lowCalDessert =  data
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map((dessert) => {
        return (
        <li>
        {dessert.name} - {dessert.calories} calories
        </li> 
        );
    });

    return (
    <ul>{lowCalDessert}</ul>
  )}
  
  export default DessertsList;
  