/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const JoinLobbyOutput: core.serialization.ObjectSchema<
    serializers.matchmaker.JoinLobbyOutput.Raw,
    RivetApi.matchmaker.JoinLobbyOutput
> = core.serialization.object({
    lobby: core.serialization.lazyObject(async () => (await import("../../../../..")).commons.MatchmakerLobbyJoinInfo),
});

export declare namespace JoinLobbyOutput {
    interface Raw {
        lobby: serializers.commons.MatchmakerLobbyJoinInfo.Raw;
    }
}
