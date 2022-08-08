import ButtonElement from "../../elements/ButtonElement/ButtonElement";
import InputElement from "../../elements/InputElement/InputElement";

function LoginComponent() {
  return (
    <>
      <h2>Login</h2>
      <InputElement type="text" text="enter username" />
      <InputElement type="password" text="enter password" />
      <ButtonElement text="login" onClick={() => console.log("mrs")} />
    </>
  );
}

export default LoginComponent;
