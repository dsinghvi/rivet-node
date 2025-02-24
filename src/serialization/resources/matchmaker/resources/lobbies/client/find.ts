/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const Request: core.serialization.Schema<
    serializers.matchmaker.lobbies.find.Request.Raw,
    Omit<RivetApi.matchmaker.FindLobbyInput, "origin">
> = core.serialization.object({
    gameModes: core.serialization.property("game_modes", core.serialization.list(core.serialization.string())),
    regions: core.serialization.list(core.serialization.string()).optional(),
    preventAutoCreateLobby: core.serialization.property(
        "prevent_auto_create_lobby",
        core.serialization.boolean().optional()
    ),
    captcha: core.serialization.lazy(async () => (await import("../../../../..")).commons.CaptchaConfig).optional(),
});

export declare namespace Request {
    interface Raw {
        game_modes: string[];
        regions?: string[] | null;
        prevent_auto_create_lobby?: boolean | null;
        captcha?: serializers.commons.CaptchaConfig.Raw | null;
    }
}

export const Response: core.serialization.Schema<
    serializers.matchmaker.lobbies.find.Response.Raw,
    RivetApi.matchmaker.FindLobbyOutput
> = core.serialization.lazyObject(async () => (await import("../../../../..")).matchmaker.FindLobbyOutput);

export declare namespace Response {
    type Raw = serializers.matchmaker.FindLobbyOutput.Raw;
}
