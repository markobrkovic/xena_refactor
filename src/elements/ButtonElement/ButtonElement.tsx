import styles from "./ButtonElementStyles.module.css";

type ButtonElementProps = {
  text: string;
  onClick: () => void;
};

function ButtonElement({ text, onClick }: ButtonElementProps) {
  return (
    <button className={styles.buttonElement} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonElement;
