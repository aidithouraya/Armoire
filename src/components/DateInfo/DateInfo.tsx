import {
    DATE_FORMAT_OPTIONS,
    DATE_LABEL,
    DATE_LANG,
    TIME_FORMAT_OPTIONS,
    TIME_LABEL,
} from "../../const";
import "./styles.css";

export interface DateInfoProps {
  date: Date;
}

export const DateInfo = ({ date }: DateInfoProps) => {
  return (
    <div className="dateInfo">
      <div className="dateContainer">
        <p className="label">{DATE_LABEL}</p>
        <p className="dateValue">
          {date
            .toLocaleDateString(DATE_LANG, DATE_FORMAT_OPTIONS)
            .replace(/\//g, ".")}
        </p>
      </div>
      <div className="timeContainer">
        <p className="label">{TIME_LABEL}</p>
        <p className="dateValue">
          {date.toLocaleTimeString(DATE_LANG, TIME_FORMAT_OPTIONS)}
        </p>
      </div>
    </div>
  );
};
