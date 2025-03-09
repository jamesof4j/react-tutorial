import MyAlert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <MyAlert onClose={() => setAlertVisibility(false)}>
          This is an <b>alert!</b>
        </MyAlert>
      )}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        Click me!
      </Button>
    </div>
  );
}

export default App;
