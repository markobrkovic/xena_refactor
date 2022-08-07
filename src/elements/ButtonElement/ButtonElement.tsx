import styles from "./ButtonElementStyles.module.css";

type ButtonElementProps = {
  onClick: () => void;
};

function ButtonElement({ onClick }: ButtonElementProps) {
  return <button className={styles.buttonElement} onClick={onClick} />;
}

export default ButtonElement;
