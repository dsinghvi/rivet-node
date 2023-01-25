/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const Request: core.serialization.Schema<
    serializers.matchmaker.lobbies.setClosed.Request.Raw,
    RivetApi.matchmaker.SetLobbyClosedInput
> = core.serialization.object({
    isClosed: core.serialization.property("is_closed", core.serialization.boolean()),
});

export declare namespace Request {
    interface Raw {
        is_closed: boolean;
    }
}
