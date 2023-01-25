/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.matchmaker.lobbies.list.Response.Raw,
    RivetApi.matchmaker.ListLobbiesOutput
> = core.serialization.lazyObject(async () => (await import("../../../../..")).matchmaker.ListLobbiesOutput);

export declare namespace Response {
    type Raw = serializers.matchmaker.ListLobbiesOutput.Raw;
}
