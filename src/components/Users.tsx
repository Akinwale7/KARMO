import React from "react";
import { connect } from "react-redux";
import { setData, loadData } from "../actions/basicAction";
const Users = props => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  return (
    <>
      <h1>Users</h1>
      <button
        onClick={() => {
          props.setData({
            name: "name",
            title: "title"
          });
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          props.loadData(url, {});
        }}
      >
        Load Data
      </button>
    </>
  );
};
export default connect(null, { setData, loadData })(Users);
