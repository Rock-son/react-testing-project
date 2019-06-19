"use strict";

import React from "react";
import expect from "expect";
import ReactRouterEnzymeContext from "react-router-enzyme-context";

import { shallow, mount, configure, simulate, update } from "enzyme";

import Timer from "../components/home/index.jsx";

// import mock context
const options = new ReactRouterEnzymeContext();
let wrapped;

beforeEach(() => {
	wrapped = mount(<Timer />, options.get());
});
afterEach(() => {
	wrapped.unmount();
});

describe("HOME PAGE RENDERING:", () => {
	it("Should render Timer component", () => {
		expect(wrapped.find(Timer).length).toEqual(1);
	});
	it("Timer component should have a span with timer class", () => {
		expect(wrapped.find("span.timer").length).toEqual(1);
	});
	it("Test should fail if Timer component has trimmer class", () => {
		expect(wrapped.find("span.trimmer").length).toEqual(0);
	});
});
