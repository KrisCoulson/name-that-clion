import React from "react";
import Select from "react-select";
import styled from "styled-components";

const Input = styled.input`
  width: 250px;
  height: 35px;
  border-radius: 4px;
`;

export const FullName = styled(Input).attrs({
  type: "text"
})``;

export const JobTitle = styled(Input).attrs({
  type: "text"
})``;

export const Label = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Location = props => (
  <div style={{ minWidth: "250px" }}>
    <Select
      options={props.options}
      onChange={obj => props.onChange(obj.value)}
    />
  </div>
);
