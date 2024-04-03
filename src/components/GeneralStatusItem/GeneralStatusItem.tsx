import "./style.css";
import { GENERAL_STATUS_CLASS_MAP, GENERAL_STATUS_TEXT_MAP } from "../../const";
import { GeneralStatus } from "../../types";

export interface GeneralStatusItemProps {
  name: string;
  status: GeneralStatus;
}

export const GeneralStatusItem = ({ name, status }: GeneralStatusItemProps) => {
  return (
    <div className="generalStatusItem">
      <div className="top">
        <h3 className="engineNameContainer">{name}</h3>
        <div className="statusLayout">
          <div className="statusContainer normalStatus">
            {GENERAL_STATUS_TEXT_MAP.normal}
          </div>
          <div className="statusContainer unNormalStatus">
            {GENERAL_STATUS_TEXT_MAP.unNormal}
          </div>
          <div className="statusContainer urgentStatus">
            {GENERAL_STATUS_TEXT_MAP.urgent}
          </div>
        </div>
      </div>
      <div className={`light ${GENERAL_STATUS_CLASS_MAP[status]}`} />
    </div>
  );
};
