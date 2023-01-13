/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const GlobalEventKind: core.schemas.Schema<
  serializers.identity.GlobalEventKind.Raw,
  RivetRivet.identity.GlobalEventKind
> = core.schemas
  .union("type", {
    chat_message: core.schemas.lazyObject(async () => (await import("../../../../..")).identity.GlobalEventChatMessage),
    chat_read: core.schemas.lazyObject(async () => (await import("../../../../..")).identity.GlobalEventChatRead),
    party_update: core.schemas.lazyObject(async () => (await import("../../../../..")).identity.GlobalEventPartyUpdate),
    identity_update: core.schemas.lazyObject(
      async () => (await import("../../../../..")).identity.GlobalEventIdentityUpdate
    ),
    matchmaker_lobby_join: core.schemas.lazyObject(
      async () => (await import("../../../../..")).identity.GlobalEventMatchmakerLobbyJoin
    ),
    chat_thread_remove: core.schemas.lazyObject(
      async () => (await import("../../../../..")).identity.GlobalEventChatThreadRemove
    ),
  })
  .transform<RivetRivet.identity.GlobalEventKind>({
    parse: (value) => {
      switch (value.type) {
        case "chat_message":
          return RivetRivet.identity.GlobalEventKind.chatMessage(value);
        case "chat_read":
          return RivetRivet.identity.GlobalEventKind.chatRead(value);
        case "party_update":
          return RivetRivet.identity.GlobalEventKind.partyUpdate(value);
        case "identity_update":
          return RivetRivet.identity.GlobalEventKind.identityUpdate(value);
        case "matchmaker_lobby_join":
          return RivetRivet.identity.GlobalEventKind.matchmakerLobbyJoin(value);
        case "chat_thread_remove":
          return RivetRivet.identity.GlobalEventKind.chatThreadRemove(value);
        default:
          return RivetRivet.identity.GlobalEventKind._unknown(value);
      }
    },
    json: (value) => value as any,
  });

export declare namespace GlobalEventKind {
  type Raw =
    | GlobalEventKind.ChatMessage
    | GlobalEventKind.ChatRead
    | GlobalEventKind.PartyUpdate
    | GlobalEventKind.IdentityUpdate
    | GlobalEventKind.MatchmakerLobbyJoin
    | GlobalEventKind.ChatThreadRemove;

  interface ChatMessage extends serializers.identity.GlobalEventChatMessage.Raw {
    type: "chat_message";
  }

  interface ChatRead extends serializers.identity.GlobalEventChatRead.Raw {
    type: "chat_read";
  }

  interface PartyUpdate extends serializers.identity.GlobalEventPartyUpdate.Raw {
    type: "party_update";
  }

  interface IdentityUpdate extends serializers.identity.GlobalEventIdentityUpdate.Raw {
    type: "identity_update";
  }

  interface MatchmakerLobbyJoin extends serializers.identity.GlobalEventMatchmakerLobbyJoin.Raw {
    type: "matchmaker_lobby_join";
  }

  interface ChatThreadRemove extends serializers.identity.GlobalEventChatThreadRemove.Raw {
    type: "chat_thread_remove";
  }
}
