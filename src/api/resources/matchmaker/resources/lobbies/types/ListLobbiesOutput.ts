/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetApi } from "@rivet-gg/api";

export interface ListLobbiesOutput {
    gameModes: RivetApi.matchmaker.GameModeInfo[];
    regions: RivetApi.matchmaker.RegionInfo[];
    lobbies: RivetApi.matchmaker.LobbyInfo[];
}
