import "./css/card.module.css";

export default function CardUI (props) {
    return (
        <div className="container">
            <ul className="talent_card">
             {props.children}    
            </ul>
        </div>
    )
}