import classes from "./css/forms.module.css";
export default function CardUI (props) {
    return (
        <div className={classes.form}>
           
             {props.children}    
     
        </div>
    )
}