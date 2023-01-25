/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const FindLobbyOutput: core.serialization.ObjectSchema<
    serializers.matchmaker.FindLobbyOutput.Raw,
    RivetApi.matchmaker.FindLobbyOutput
> = core.serialization.object({
    lobby: core.serialization.lazyObject(async () => (await import("../../../../..")).commons.MatchmakerLobbyJoinInfo),
});

export declare namespace FindLobbyOutput {
    interface Raw {
        lobby: serializers.commons.MatchmakerLobbyJoinInfo.Raw;
    }
}
