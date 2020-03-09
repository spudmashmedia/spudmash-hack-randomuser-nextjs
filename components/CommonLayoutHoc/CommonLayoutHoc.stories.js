import React from "react";
import CommonLayoutHoc from "./CommonLayoutHoc";
import UserGrid from "../UserGrid";
import { actionData } from "../UserGrid/UserGrid.stories";

export default {
  component: CommonLayoutHoc,
  title: "CommonLayoutHoc",
  excludeStories: /.*Data$/
};

let opts = { title: "RANDOM USER TESTHARNESS" };

export const Default = () => {
  let testComponent = (
    <div>
      <h1>This is a basic test</h1>
    </div>
  );

  return <div>{CommonLayoutHoc(testComponent, opts)}</div>;
};

export const withUserGridLoaded = () => {
  let testComponent = <UserGrid data={actionData} isLoading={false} />;
  return <div>{CommonLayoutHoc(testComponent, opts)}</div>;
};

export const withUserGridLoading = () => {
  let testComponent = <UserGrid isLoading={true} />;
  return <div>{CommonLayoutHoc(testComponent, opts)}</div>;
};
