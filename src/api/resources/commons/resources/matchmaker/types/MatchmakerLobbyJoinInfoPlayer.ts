/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetApi } from "@fern-api/rivet";

/**
 * A matchmaker lobby player.
 */
export interface MatchmakerLobbyJoinInfoPlayer {
    /**
     * Pass this token through the socket to the lobby server. The lobby server will validate this token with `PlayerConnected.player_token`
     *
     */
    token: RivetApi.commons.Jwt;
}
