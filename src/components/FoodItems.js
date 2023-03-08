const FoodItems=(props)=>{
return(
    <div>
    <div>
        <ul>
            Electronic Items
            <li>
{
  props.records.map((currUser) => {
    const { id, ProductId, ProductName, Price, Category } = currUser;
    return (
      <div className="data-styles-container"key={id}>
        <div className="data-styles" >
          <p >
            {ProductId} {ProductName} {Price} 
          </p>
        </div>
      </div>
    );
  })}

            </li>
        </ul>
    </div>

    <div>
        <ul>
            Food Items
            <li>

            </li>
        </ul>
    </div>

    <div>
        <ul>
            SkinCare Items
            <li>

            </li>
        </ul>
    </div>
    </div>
)
}
export default FoodItems