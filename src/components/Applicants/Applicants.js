import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import style from "./Applicants.module.scss";

export default function Applicants() {
  const [data, setdata] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);
  const [code, setcode] = useState("");
  const [showData, setshowData] = useState(false);
  function submitcode(e) {
    e.preventDefault();
    if (code === "4009043") {
      setshowData(true);
    } else {
      console.log("failed");
    }
  }
  return (
    <Container>
      {showData ? null : (
        <div>
          <input
            type="text"
            value={code}
            onChange={(e) => setcode(e.target.value)}
          />
          <input type="submit" onClick={submitcode} />
        </div>
      )}
      {showData ? (
        <>
          <table>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>zip-code</th>
            </tr>
            {data.map((person) => (
              <tr>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.address.zipcode}</td>
              </tr>
            ))}
          </table>
        </>
      ) : null}
    </Container>
  );
}
