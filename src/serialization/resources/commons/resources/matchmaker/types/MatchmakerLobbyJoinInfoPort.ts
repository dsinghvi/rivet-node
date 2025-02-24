/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const MatchmakerLobbyJoinInfoPort: core.serialization.ObjectSchema<
    serializers.commons.MatchmakerLobbyJoinInfoPort.Raw,
    RivetApi.commons.MatchmakerLobbyJoinInfoPort
> = core.serialization.object({
    host: core.serialization.string().optional(),
    hostname: core.serialization.string(),
    port: core.serialization.number().optional(),
    portRange: core.serialization.property(
        "port_range",
        core.serialization.lazyObject(
            async () => (await import("../../../../..")).commons.MatchmakerLobbyJoinInfoPortRange
        )
    ),
    isTls: core.serialization.property("is_tls", core.serialization.boolean()),
});

export declare namespace MatchmakerLobbyJoinInfoPort {
    interface Raw {
        host?: string | null;
        hostname: string;
        port?: number | null;
        port_range: serializers.commons.MatchmakerLobbyJoinInfoPortRange.Raw;
        is_tls: boolean;
    }
}
