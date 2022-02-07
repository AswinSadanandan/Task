import React, { useEffect, useState } from "react";

function App() {
  const [name, Setname] = useState("");
  const [contact, setContact] = useState("");

  const [Designation, setDesignation] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState([]);
  const [dob, setDob] = useState("");
  const [view, setView] = useState(false);
  const [details, setDetails] = useState([]);
  const [skillInput, setSkillinput] = useState([""]);

  useEffect(() => {
    console.log("details", details);
  }, [details]);
  const handleDownloadJson = () => {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(details, null, 2));
    var dlAnchorElem = document.getElementById("downloadAnchorElem");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();
  };

  const handleSkillsdata = () => {
    setSkillinput([...skillInput, ""]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails([
      ...details,
      { name, contact, Designation, phone, skillInput, dob },
    ]);

    setSkillinput([""]);
    setContact("");
    setDesignation("");
    setPhone("");

    setSkills("");
    Setname("");
    setDob("");
    setView(false);
    console.log(skillInput);
  };

  return (
    <div className="create">
      <h2>Employee Data</h2>
      <div className="box">
        <div>
          <div className="name">
            <div className="general">
              <label>Name:</label>
            </div>
            <div className="nameinput">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => Setname(e.target.value)}
              />
            </div>
          </div>
          <div className="name">
            <div className="general">
              <label>Designation:</label>
            </div>
            <div className="nameinput">
              <input
                type="text"
                required
                value={Designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>
          </div>
          <div className="name">
            <div className="general">
              <label>Contact Details:</label>
            </div>
            <div className="nameinput1">
              <input
                type="text"
                required
                placeholder="type"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="nameinput">
              <input
                type="text"
                placeholder="phonenumber"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="name1">
            <div className="general">
              <label>Skills</label>
            </div>
            <div>
              {skillInput.map((item, i) => {
                return (
                  <div className="parent">
                    <div className="nameinput">
                      <input
                        key={i}
                        type="text"
                        value={skillInput[i]}
                        onChange={(e) => {
                          const currentinput = skillInput.slice();
                          currentinput[i] = e.target.value;
                          setSkillinput(currentinput);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="btn">
              <button className="asd" onClick={handleSkillsdata}>
                +
              </button>
            </div>
          </div>
          <div className="name">
            <div className="general">
              <label>DOB</label>
            </div>
            <div className="nameinput">
              <input
                type="text"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
          <br />
          <button onClick={handleSubmit}>ADD EMPLOYEE</button>
        </div>
      </div>
      <div></div>
      <br />
      <div>
        <button onClick={() => setView(true)}>VIEW DATA</button>
      </div>
      <br />
      {view && (
        <div>
          {details.map((employeedetails, index) => {
            const { name, contact, Designation, phone, skillInput, dob } =
              employeedetails;
            return (
              <article key={index} className="box2">
                #Employee{index + 1}
                <p>Name: {name}</p>
                <p>Designation :{Designation}</p>
                <p>
                  Contact Number:{contact}-{phone}
                </p>
                <p>
                  Skills:
                  {skillInput.map((item) => {
                    return <div className="align">{item}</div>;
                  })}
                </p>
                <p>DOB :{dob}</p>
              </article>
            );
          })}
        </div>
      )}
      <br />
      <button onClick={handleDownloadJson}>Download JSON</button>
      <a id="downloadAnchorElem" href="#"></a>
    </div>
  );
}

export default App;
