import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [lockers, setLockers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetch(`http://localhost:8080/api/v1/lockers`);

    const resBody = await res.json();

    setLockers(resBody);
  };

  return (
    <div>
      {lockers.map((locker) => {
        return <div key={locker._id}>{locker.codigo}</div>;
      })}
    </div>
  );
}

export default Home;
