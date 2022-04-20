// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Select from "terra-form-select";
import { IntlProvider } from "react-intl";

const Hello = (props) => (
  <IntlProvider locale={navigator.language || "en"}>
    <>
      <div>Hello {props.name}!</div>
      <Select>
        <Select.Option value="1" display="1" />
      </Select>
    </>
  </IntlProvider>
);

Hello.defaultProps = {
  name: "David",
};

Hello.propTypes = {
  name: PropTypes.string,
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.style.cssText = "height:100%;width:100%;position:fixed";
  ReactDOM.render(<Hello name="React" />, document.body.appendChild(container));
});
