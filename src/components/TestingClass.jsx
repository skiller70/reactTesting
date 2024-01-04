import React, { useEffect, useState } from "react";

export default function TestingClass() {
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    console.log("life cycle");
  }, [isUser]);

  return (
    <div>
      <h1>{isUser && <div>user get successfully</div>}</h1>
    </div>
  );
}
