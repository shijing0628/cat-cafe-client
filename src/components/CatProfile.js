import React, { useState, useEffect } from "react";

function CatProfile() {
  const [cats, setCats] = useState([]);
  const [hasError, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3001/api/cats");
      res
        .json()
        .then((res) => setCats(res))
        .catch((err) => setErrors(err));
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <div>loading...</div>
        ) : (
          cats.map((cat) => (
            <div key={cat.id}>
              <p>{cat.name}</p>
              <img src={cat.image} alt="alt" width="300" height="300" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CatProfile;
