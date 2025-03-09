import MyAlert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <MyAlert onClose={() => setAlertVisibility(false)}>
          Oh my gosh, this is so important!
        </MyAlert>
      )}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        Hit the Button
      </Button>
    </div>
  );
}

export default App;
