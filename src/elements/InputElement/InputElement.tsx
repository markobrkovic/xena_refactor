type InputElementProps = {
  type: string;
};

function InputElement({ type }: InputElementProps) {
  return <input type={type} />;
}

export default InputElement;
