import { EngineData } from "../../types";
import "./style.css";

type OtherInfo = Omit<EngineData, "status" | "id" | "name">;

export interface OtherInfoProps {
  firstEngine: OtherInfo;
  secondEngine: OtherInfo;
}

export const OtherInfo = ({ firstEngine, secondEngine }: OtherInfoProps) => {
  return (
    <div className="otherInfo">
      <div className="item">
        <p className="infoContainer">{firstEngine.temperature}</p>
        <p className="infoContainer">{firstEngine.humidity}</p>
        <p className="infoContainer">{firstEngine.concentration}</p>
      </div>
      <div className="item">
        <p className="infoContainer">{secondEngine.temperature}</p>
        <p className="infoContainer">{secondEngine.humidity}</p>
        <p className="infoContainer">{secondEngine.concentration}</p>
      </div>
    </div>
  );
};
