/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetRivet } from "@fern-api/rivet";

/**
 * A matchmaker lobby.
 */
export interface MatchmakerLobbyJoinInfo {
  lobbyId: string;
  region: RivetRivet.commons.MatchmakerLobbyJoinInfoRegion;
  ports: Record<string, RivetRivet.commons.MatchmakerLobbyJoinInfoPort>;
  player: RivetRivet.commons.MatchmakerLobbyJoinInfoPlayer;
}
