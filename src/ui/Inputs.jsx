import React from "react";
import Select from "react-select";
import styled from "styled-components";

const Input = styled.input`
  min-width: 250px;
  min-height: 35px;
  border-radius: 4px;
  border: 1px solid #cfdde7;
  margin: 10px 0px 15px 0px;
  padding: 10px;
  font-size: 14px;
`;

export const Text = styled(Input).attrs({
  type: "text"
})``;

export const Label = styled.div`
  font-size: 16px;
`;

export const Location = props => (
  <div style={{ minWidth: "250px", margin: "10px 0px 15px 0px" }}>
    <Select
      options={props.options}
      onChange={obj => props.onChange(obj.value)}
    />
  </div>
);
