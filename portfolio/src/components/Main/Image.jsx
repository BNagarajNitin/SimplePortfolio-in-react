/* eslint-disable jsx-a11y/alt-text */
function Image(props){
    return(
        <div>
            <img src={props.image} width="200px" height="200px"/>
            <h3>{props.title}</h3>
        </div>
    )
}
export default Image;