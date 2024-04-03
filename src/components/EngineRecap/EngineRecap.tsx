import { EngineData } from "../../types";
import { EngineStatusRecap } from "../EngineStatusRecap/EngineStatusRecap";
import { Title } from "../Title/Title";
import "./style.css";
export type EngineRecapProps = {
  data: EngineData;
};
export const EngineRecap = ({ data }: EngineRecapProps) => {
  return (
    <div className="mainLayout">
      <Title title={data.name} />
      <div className="indicatorContainer">
        <img src="/indicator.png" alt="indicator" />
        <img src="/indicator.png" alt="indicator" />
        <img src="/indicator.png" alt="indicator" />
      </div>
      <div className="indicatorContainer">
        <img src="/indicator.png" alt="indicator" />
        <img src="/indicator.png" alt="indicator" />
        <img src="/indicator.png" alt="indicator" />
      </div>
      <div className="indicatorContainer">
        <img src="/indicator.png" alt="indicator" />
        <img src="/indicator.png" alt="indicator" />
        <img src="/indicator.png" alt="indicator" />
      </div>
      <div className="statusLayout">
        {Object.keys(data?.status).map((descriptionKey, index) => (
          <EngineStatusRecap
            key={index}
            description={descriptionKey}
            status={data.status[descriptionKey as keyof typeof data.status]}
          />
        ))}
      </div>
    </div>
  );
};
