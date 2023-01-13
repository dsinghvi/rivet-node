/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const PartyMemberState: core.schemas.Schema<
  serializers.commons.PartyMemberState.Raw,
  RivetRivet.commons.PartyMemberState
> = core.schemas
  .union("type", {
    idle: core.schemas.object({}),
    matchmaker_pending: core.schemas.object({}),
    matchmaker_finding_lobby: core.schemas.object({}),
    matchmaker_lobby: core.schemas.lazyObject(
      async () => (await import("../../../../..")).commons.PartyMemberStateMatchmakerLobby
    ),
  })
  .transform<RivetRivet.commons.PartyMemberState>({
    parse: (value) => {
      switch (value.type) {
        case "idle":
          return RivetRivet.commons.PartyMemberState.idle();
        case "matchmaker_pending":
          return RivetRivet.commons.PartyMemberState.matchmakerPending();
        case "matchmaker_finding_lobby":
          return RivetRivet.commons.PartyMemberState.matchmakerFindingLobby();
        case "matchmaker_lobby":
          return RivetRivet.commons.PartyMemberState.matchmakerLobby(value);
        default:
          return RivetRivet.commons.PartyMemberState._unknown(value);
      }
    },
    json: (value) => value as any,
  });

export declare namespace PartyMemberState {
  type Raw =
    | PartyMemberState.Idle
    | PartyMemberState.MatchmakerPending
    | PartyMemberState.MatchmakerFindingLobby
    | PartyMemberState.MatchmakerLobby;

  interface Idle {
    type: "idle";
  }

  interface MatchmakerPending {
    type: "matchmaker_pending";
  }

  interface MatchmakerFindingLobby {
    type: "matchmaker_finding_lobby";
  }

  interface MatchmakerLobby extends serializers.commons.PartyMemberStateMatchmakerLobby.Raw {
    type: "matchmaker_lobby";
  }
}
