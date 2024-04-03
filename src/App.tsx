import { useEffect, useMemo, useState } from "react";
import { Data } from "./types";
import { EngineRecap } from "./components/EngineRecap/EngineRecap";
import { GeneralStatusItem } from "./components/GeneralStatusItem/GeneralStatusItem";
import { DateInfo } from "./components/DateInfo/DateInfo";
import { OtherInfo } from "./components/OtherInfo/OtherInfo";
import { ConfigSection } from "./components/ConfigSection/ConfigSection";
import { Title } from "./components/Title/Title";
import { GENERAL_STATUS_TITLE } from "./const";

function App() {
  const [data, setData] = useState<Data>({
    engines: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      fetch("http://localhost:5175/data.json")
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    fetchData();
  }, []);

  const isDataReady = useMemo(() => data.engines.length > 1, [data]);

  return (
    <div className="appLayout">
      {isDataReady && (
        <>
          <EngineRecap data={data.engines[0]} />
          <div className="generalLayout">
            <Title title={GENERAL_STATUS_TITLE} />
            <DateInfo date={new Date()} />
            <GeneralStatusItem name={data.engines[0]?.name} status="normal" />
            <GeneralStatusItem name={data.engines[1]?.name} status="normal" />
            <OtherInfo
              firstEngine={data.engines[0]}
              secondEngine={data.engines[1]}
            />
            <ConfigSection />
          </div>
          <EngineRecap data={data.engines[1]} />
        </>
      )}
    </div>
  );
}

export default App;
