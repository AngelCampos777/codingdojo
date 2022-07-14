const complete = {
    textDecoration: "line-through"
}
const incomplete = {
    fontWeight: "bold"
}
const flex = {
    display: "flex",
    justifyContent: "center"
}
const List = props => {
    return(
        <div>
            <h1>List</h1>
            {
                props.myList.map((item, i) => {
                    return(
                        <div style={flex} key={i}>
                            <input  type="checkbox" checked={item.isComplete} onChange={() => props.handleCheck(i)}/>
                            <p style={item.isComplete ? complete : incomplete}>{item.todo}</p>
                            <button onClick={(e) => {props.handleDelete(i);}}>Delete</button>
                        </div>
                    )
                }
                )
            }
        </div>
    );
}

export default List;