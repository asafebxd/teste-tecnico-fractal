import { useEffect, useState } from "react";

function Locker() {
  const [locker, setLocker] = useState([]);

  const addLocker = async () => {
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

  return <>Teste</>;
}

export default Locker;
