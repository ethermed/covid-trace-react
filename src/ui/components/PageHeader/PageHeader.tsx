import React, { FunctionComponent } from "react";

export const PageHeader: FunctionComponent<PageHeaderInterface> = ({
  headline,
}) => {
  return (
    <header>
      <h1 className="txt__h2">{headline}</h1>
    </header>
  );
};

interface PageHeaderInterface {
  headline: string;
}
