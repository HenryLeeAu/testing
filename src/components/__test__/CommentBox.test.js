import React from "react";
import { mount, unmount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";
let wrappered;
beforeEach(() => {
  wrappered = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

//mount need to be unmounted
afterEach(() => {
  wrappered.unmount();
});

it("has a test area and 2 buttons", () => {
  expect(wrappered.find("textarea").length).toEqual(1);
  expect(wrappered.find("button").length).toEqual(2);
});

describe("the text area", () => {
  beforeEach(() => {
    wrappered.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    wrappered.update();
  });

  it("has a text area", () => {
    expect(wrappered.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted, text area gets emptied", () => {
    wrappered.find("form").simulate("submit");
    wrappered.update();
    expect(wrappered.find("textarea").prop("value")).toEqual("");
  });
});
