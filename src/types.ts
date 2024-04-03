export interface EngineData {
    id: number;
    name: string;
    status: EngineStatus;
    concentration: string;
    temperature: string;
    humidity: string;
}
export interface EngineStatus {
    "Etat Disjoncteur": Status;
    "Etat Relais TH": Status;
    "Etat Sectionneur": Status;
    "Etat KM1": Status;
    "Elat Fusible": Status;
    "Etat KM2": Status;
    "Etat Boulon A-U": Status;
    "Etat KM3": Status;
}

export type Status = "good" | "bad" | "normal";
export type GeneralStatus = "normal" | "unNormal" | "urgent";
export type Data = {
    engines: EngineData[]
};