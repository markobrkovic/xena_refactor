import styles from "./InputElementStyles.module.css";

type InputElementProps = {
  type: string;
  text: string;
};

function InputElement({ type, text }: InputElementProps) {
  return (
    <input className={styles.inputElement} type={type} placeholder={text} />
  );
}

export default InputElement;
