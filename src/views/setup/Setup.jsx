import React from "react";
import { Formik } from "formik";
import Dropzone from "react-dropzone";

import Button from "../../ui/Button";
import { Label, Location, Text } from "../../ui/Inputs";

const options = [
  { value: "Burnaby", label: "Burnaby" },
  { value: "Toronto", label: "Toronto" },
  { value: "Los Angeles", label: "Los Angeles" }
];

const errorStyle = {
  color: "red",
  fontSize: "18px",
  fontWeight: "bold",
  textShadow: "0 0 1px black",
  marginTop: "-15px",
  marginBottom: "15px"
};

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
        validate={values => {
          let errors = {};
          if (!values.fullName) {
            errors.fullName = "Required";
          }
          if (!values.jobTitle) {
            errors.jobTitle = "Required";
          }
          if (!values.location) {
            errors.location = "Required";
          }
          return errors;
        }}
      >
        {({ errors, handleSubmit, setFieldValue, touched, values }) => (
          <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Dropzone
                accept="image/jpeg, image/jpg, image/png"
                onDrop={this.onDrop}
                style={{
                  position: "relative",
                  width: "200px",
                  height: "200px",
                  backgroundColor: "#EAEBEC",
                  borderWidth: "2px",
                  borderColor: "rgb(102, 102, 102)",
                  borderStyle: "dashed",
                  borderRadius: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px"
                }}
              >
                <div>
                  <i
                    className="fa fa-camera"
                    style={{ fontSize: "80px", color: "rgba(15, 173, 233, 0.4)" }}
                  />
                </div>
              </Dropzone>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <div>
                <Label>Enter your full name</Label>
                <Text
                  name="fullName"
                  onChange={({ target: { value } }) =>
                    setFieldValue("fullName", value)
                  }
                  placeholder="Type your full name here..."
                  value={values.fullName}
                />
                <div style={errorStyle}>
                  {errors.fullName && touched.fullName && errors.fullName}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <div>
                <Label>Enter your job title</Label>
                <Text
                  placeholder="Type your job title here..."
                  name="jobTitle"
                  onChange={({ target: { value } }) =>
                    setFieldValue("jobTitle", value)
                  }
                  value={values.jobTitle}
                />
                <div style={errorStyle}>
                  {errors.jobTitle && touched.jobTitle && errors.jobTitle}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <div>
                <Label>Enter your location</Label>
                <Location
                  name="location"
                  onChange={value => setFieldValue("location", value)}
                  options={options}
                />
                <div style={errorStyle}>
                  {errors.location && touched.location && errors.location}
                </div>
              </div>
            </div>
            <div style={{ marginTop: "32px" }}>
              <Button type="submit">Save</Button>
            </div>
          </form>
        )}
      </Formik>
    );
  }
}

export default Setup;
