/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const PartyMemberStateMatchmakerLobby: core.schemas.ObjectSchema<
  serializers.commons.PartyMemberStateMatchmakerLobby.Raw,
  RivetRivet.commons.PartyMemberStateMatchmakerLobby
> = core.schemas.object({
  playerId: core.schemas.property("player_id", core.schemas.string()),
});

export declare namespace PartyMemberStateMatchmakerLobby {
  interface Raw {
    player_id: string;
  }
}
