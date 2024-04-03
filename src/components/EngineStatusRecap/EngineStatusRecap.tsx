import { STATUS_CLASS_MAP } from "../../const";
import { Status } from "../../types";
import "./styles.css";

export type EngineStatusRecapProps = {
  status: Status;
  description: string;
};


export const EngineStatusRecap = ({
  description,
  status,
}: EngineStatusRecapProps) => {

  return (
    <div className="statusContainer">
      <div className="statusDescription">
        <p>{description}</p>
      </div>
      <div className="statusLightContainer">
        <span className={`light ${STATUS_CLASS_MAP[status]}`}></span>
      </div>
    </div>
  );
};
