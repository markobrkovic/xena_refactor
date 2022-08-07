import ButtonElement from "../../elements/ButtonElement/ButtonElement";
import InputElement from "../../elements/InputElement/InputElement";

function LoginComponent() {
  return (
    <>
      <InputElement type="text" />
      <ButtonElement onClick={() => console.log("mrs")} />
    </>
  );
}

export default LoginComponent;
