import { useState } from "react";

function EditComponent() {
  const [locker, setLocker] = useState([]);

  const editLocker = async () => {
    const res = await fetch(`http://localhost:8080/api/v1/locker`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locker,
      }),
    });

    const resBody = await res.json();

    setLocker(resBody);
  };

  return <></>;
}

export default EditComponent;
