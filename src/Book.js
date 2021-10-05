import React from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import getMuiTheme from "material-ui/styles/getMuiTheme";
import history from "./history";
import { withRouter } from "react-router-dom";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ShowHotels from './Test';

const DatePickerAdapter = ({ input: { onChange, value }, ...rest }) => (
  <DatePicker selected={value} onChange={(date) => onChange(date)} {...rest} />
);

const required = (value) => (value ? undefined : "Required");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values, props) => {
  if (values.checkin && values.checkout && values.bedrooms) {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
    history.push("/itemspage");
    values.checkin = "";
    values.checkout = "";
    values.guest = "";
  } else {
    window.alert("add dates");
  }
};

const Book = () => (
  <div className="booking">
    {/* <MuiThemeProvider muiTheme={getMuiTheme()}> */}
    <Styles>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Check-in:</label>
              <Field
                name="checkin"
                validate={required}
                dateFormat="MM/dd/yyyy"
                component={DatePickerAdapter}
              />
            </div>
            <div>
              <label>Check-out:</label>
              <Field
                name="checkout"
                validate={required}
                dateFormat="MM/dd/yyyy"
                component={DatePickerAdapter}
              />
            </div>
            <div>
              <label>
                <Field
                  name="bedrooms"
                  component="input"
                  type="checkbox"
                  value="1"
                />{" "}
                1 bed
              </label>
              <label>
                <Field
                  name="bedrooms"
                  component="input"
                  type="checkbox"
                  value="2"
                />{" "}
                2 bed
              </label>
              <label>
                <Field
                  name="bedrooms"
                  component="input"
                  type="checkbox"
                  value="3"
                />{" "}
                3 bed
              </label>
            </div>
            <div />
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Search
              </button>
              <button
                type="button"
                onClick={reset}
                // disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Styles>
    {/* </MuiThemeProvider> */}
    <ShowHotels />
  </div>
);

export default withRouter(Book);
