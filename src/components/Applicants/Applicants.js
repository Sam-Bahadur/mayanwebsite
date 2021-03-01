import { Container } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import style from "./Applicants.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function Applicants() {
  const [data, setdata] = useState([]);
  const [code, setcode] = useState("");
  const [showData, setshowData] = useState(false);
  const [loading, setLoading] = useState(false);
  const submitcode = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.dark("please wait");
    const headers = {
      "X-PERM-CODE": `${code}`,
      // "X-PERM-CODE": `b92422f5-9346`,
    };
    await axios
      .get(
        "https://api.sathinewyork.com/mayan/api/academy/applicants/?test=true",
        {
          headers: headers,
        }
      )
      .then((response) => setdata(response.data));
    if (data) {
      setLoading(false);
      setshowData(true);
    } else {
      console.log("failed");
    }
  };
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
              <tr key={person.contact}>
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
