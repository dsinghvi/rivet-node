/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const Request: core.serialization.Schema<
    serializers.matchmaker.lobbies.join.Request.Raw,
    RivetApi.matchmaker.JoinLobbyInput
> = core.serialization.object({
    lobbyId: core.serialization.property("lobby_id", core.serialization.string()),
    captcha: core.serialization.lazy(async () => (await import("../../../../..")).commons.CaptchaConfig).optional(),
});

export declare namespace Request {
    interface Raw {
        lobby_id: string;
        captcha?: serializers.commons.CaptchaConfig.Raw | null;
    }
}

export const Response: core.serialization.Schema<
    serializers.matchmaker.lobbies.join.Response.Raw,
    RivetApi.matchmaker.JoinLobbyOutput
> = core.serialization.lazyObject(async () => (await import("../../../../..")).matchmaker.JoinLobbyOutput);

export declare namespace Response {
    type Raw = serializers.matchmaker.JoinLobbyOutput.Raw;
}
