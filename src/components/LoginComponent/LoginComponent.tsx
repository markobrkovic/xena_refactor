import ButtonElement from "../../elements/ButtonElement/ButtonElement";
import InputElement from "../../elements/InputElement/InputElement";
import { login } from "../../store/actions/loginActions";
import store from "../../store/store";
import { connect, ConnectedProps } from "react-redux";

function LoginComponent(props: PropsFromRedux) {
  return (
    <>
      <h2>Login</h2>
      <InputElement type="text" text="enter username" />
      <InputElement type="password" text="enter password" />
      <ButtonElement text="login" onClick={props.login} />
    </>
  );
}

const mapDispatchToProps = (dispatch: typeof store.dispatch) => {
  return {
    login: () => dispatch(login()),
  };
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(LoginComponent);
