import { ContigoMaria } from "./data/ContigoMaria";
import { dijisteSi } from "./data/dijisteSi";
import { JuntoATiMaria } from "./data/JuntoATiMaria";
import { LaFeDeMaria } from "./data/LaFeDeMaria";
import { MariaMDDios } from "./data/MariaMDDios";
import { MariaMirame } from "./data/MariaMirame";
import { salveRociera } from "./data/salveRociera";
import { SantaMDCamino } from "./data/SantaMDCamino";
import type { Song } from "./types";

export const songs: Song[] = [
  salveRociera,
  dijisteSi,
  LaFeDeMaria,
  MariaMirame,
  ContigoMaria,
  MariaMDDios,
  SantaMDCamino,
  JuntoATiMaria,
];
