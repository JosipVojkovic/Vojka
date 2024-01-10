export default function Nav(props) {

    /* 
    const liElements = newNavData.map((item) => {
        return <li key={item.id}><a id={item.id} className={item.linkActive ? "activeLink": ""}>{item.name}</a></li>
    }) 
    */

    return (
        <>
          <li><a className={props.isSelected ? props.className: ""} onClick={props.onSelect}>{props.children}</a></li>
        </>
    )
}