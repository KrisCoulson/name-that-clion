import React from "react";
import { Formik } from "formik";
import Dropzone from "react-dropzone";
import styled from 'styled-components';

import { FullName, JobTitle, Label, Location } from "../../ui/Inputs";

const options = [
  { value: "Burnaby", label: "Burnaby" },
  { value: "Toronto", label: "Toronto" },
  { value: "Los Angeles", label: "Los Angeles" }
];

const DropzoneIcon = styled.div`
  background-color: #EAEBEC;
  border-radius: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

class Setup extends React.Component {
  onDrop = files => console.log("files are : ", files);

  onSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <Formik
        onSubmit={this.onSubmit}
        initialValues={{
          fullName: "",
          jobTitle: "",
          location: ""
        }}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Dropzone
                accept="image/png"
                onDrop={this.onDrop}
              >
                <DropzoneIcon>hello</DropzoneIcon>
              </Dropzone>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              <div>
              <Label>Enter your full name</Label>
              <FullName
                name="fullName"
                onChange={({ target: { value } }) =>
                  setFieldValue("fullName", value)
                }
                placeholder="type your full name here"
                value={values.fullName}
              />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div>
              <Label>Enter your job title</Label>
              <JobTitle
                placeholder="type your job title here"
                name="jobTitle"
                onChange={({ target: { value } }) =>
                  setFieldValue("jobTitle", value)
                }
                value={values.jobTitle}
              />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div>
              <Label>Enter your location</Label>
              <Location
                name="location"
                onChange={value => setFieldValue("location", value)}
                options={options}
              />
            </div>
          </div>
            <button type="submit">Save</button>
          </form>
        )}
      </Formik>
    );
  }
}

export default Setup;
