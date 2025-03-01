import { useContext } from "react";
import { NavContext } from "./App";

export function CustomButton() {
  const { signedIn, setSignedIn } = useContext(NavContext);

  return <button onClick={() => setSignedIn(!signedIn)} >
    {signedIn ? 'Sign out' : 'Sign in'}
  </button>
}