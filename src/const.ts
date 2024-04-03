import { GeneralStatus, Status } from "./types";

export const STATUS_CLASS_MAP: Record<Status, string> = {
    good: "goodLight",
    bad: "badLight",
    normal: "normalLight",
};
export const GENERAL_STATUS_CLASS_MAP: Record<GeneralStatus, string> = {
    normal: "normalLight",
    urgent: "urgentLight",
    unNormal: "unNormalLight",
};

export const GENERAL_STATUS_TEXT_MAP: Record<GeneralStatus, string> = {
    normal: "Etat normal",
    unNormal: "Etat anormal",
    urgent: "Etat urgent",
}

export const DATE_LANG = "fr-FR";
export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
};
export const TIME_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
};
export const DATE_LABEL = "DATE";
export const TIME_LABEL = "HEURE";

export const HISTORY_TEXT = "HISTORIQUE";
export const CONFIG_TEXT = "CONFIGURATION";
export const GENERAL_STATUS_TITLE = "ETATS GENERAL"

