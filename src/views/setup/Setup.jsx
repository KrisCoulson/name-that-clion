import React from "react";
import { Formik } from "formik";

import { JobTitle, Location, Picture } from "../../ui/Inputs";

const options = [
  {
    name: "Burnaby"
  },
  {
    name: "Toronto"
  },
  {
    name: "Los Angeles"
  }
];

class Setup extends React.Component {
  onSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <Formik
        initialValues={{
          jobTitle: ""
        }}
        onSubmit={this.onSubmit}
      >
        {props => {
          const { values, handleChange, handleSubmit, setFieldValue } = props;
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <h2>fill in your job title</h2>
                <JobTitle
                  placeholder="type in your job here"
                  name="jobTitle"
                  onChange={handleChange}
                  value={values.jobTitle}
                />
              </div>
              <div>
                <h2>Enter your location</h2>
                <Location
                  name="location"
                  onChange={handleChange}
                  value={values.location}
                >
                  {options.map(option => (
                    <option key={option.name} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </Location>
              </div>
              <div>
                <h2>Upload your picture here</h2>
                <Picture
                  name="picture"
                  onChange={event => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                />
              </div>
              <button type="submit">Save</button>
            </form>
          );
        }}
      </Formik>
    );
  }
}

export default Setup;
