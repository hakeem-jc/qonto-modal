import { FC } from "react";
import './Button.scss';

interface ButtonProps {
    text: string;
}

const Button:FC<ButtonProps> = (props) => {
    return <>
        <button className="Button">{props.text}</button>
    </>
}

export default Button;