import authReducer from "./auth-reducer";
import { AuthActionCreators } from "./auth-reducer";

describe("Auth reducer testing", () => {
  test("Username is correct in state after signin", () => {
    const prevState = {
      username: "",
      isAuth: false,
    };
    const testUsername = "test username";
    const action = AuthActionCreators.signIn(testUsername);
    const newState = authReducer(prevState, action);

    expect(newState.username).toEqual(testUsername);
    expect(newState.isAuth).toBeTruthy();
  });
  test("Sign out action test", () => {
    const prevState = {
      username: "test username",
      isAuth: true,
    };
    const action = AuthActionCreators.signOut();
    const newState = authReducer(prevState, action);

    expect(newState.username).toBe("");
    expect(newState.isAuth).toBeFalsy();
  });
});
