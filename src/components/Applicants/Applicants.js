import { Container } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import style from "./Applicants.module.scss";

export default function Applicants() {
  const [data, setdata] = useState();
  useEffect(() => {
    const headers = {
      "X-PERM-CODE": "b92422f5-9346",
    };
    axios
      .get(
        "http://api.sathinewyork.com/mayan/api/academy/applicants/?test=true",
        {
          headers: headers,
        }
      )
      .then((response) => setdata(response.data));
  }, []);
  const [code, setcode] = useState("");
  const [showData, setshowData] = useState(false);
  function submitcode(e) {
    e.preventDefault();
    const headers = {
      "X-PERM-CODE": "b92422f5-9346",
    };
    if (code === "b92422f5-9346") {
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
              <th>first name</th>
              <th>middle name</th>
              <th>last name</th>
              <th>contact</th>
              <th>Address</th>
              <th>Expectation</th>
              <th>source</th>
              <th>duration</th>
            </tr>
            {data.map((person) => (
              <tr>
                <td>{person.first_name}</td>
                <td>{person.middle_name}</td>
                <td>{person.last_name}</td>
                <td>{person.contact}</td>
                <td>{person.address}</td>
                <td>{person.expectation}</td>
                <td>{person.recognition_source}</td>
                <td>{person.course_duration_feasibility}</td>
              </tr>
            ))}
          </table>
        </>
      ) : null}
    </Container>
  );
}
