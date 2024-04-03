import React from "react";
import "./styles.css";

export const Title = ({ title }: { title: string }) => {
  return <p className="title">{title}</p>;
};
