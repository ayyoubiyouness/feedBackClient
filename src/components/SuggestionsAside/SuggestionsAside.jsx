import React from "react";
import { AppInfo } from "../AppInfo/AppInfo";
import { Tag } from "../Tag/Tag";
import "./suggestionsAside.css";
export const SuggestionsAside = () => {
  return (
    <aside className="suggestions__aside">
      <img src="download.png" alt="" className="fev-logo" />
      <AppInfo />
      <Tag />
    </aside>
  );
};
