import { CONFIG_TEXT, HISTORY_TEXT } from "../../const";
import "./styles.css";

export const ConfigSection = () => {
  return (
    <div className="configSection">
      <div className="configBtn">{HISTORY_TEXT}</div>
      <div className="configBtn">{CONFIG_TEXT}</div>
    </div>
  );
};
