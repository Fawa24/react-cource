import { useState } from "react";

export function CustomButton() {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  return <button onClick={() => setSignedIn(!signedIn)} >
    {signedIn ? 'Sign our' : 'Sign in'}
  </button>
}