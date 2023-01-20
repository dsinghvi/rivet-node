/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const GlobalEventChatMessage: core.serialization.ObjectSchema<
    serializers.identity.GlobalEventChatMessage.Raw,
    RivetApi.identity.GlobalEventChatMessage
> = core.serialization.object({
    thread: core.serialization.lazyObject(async () => (await import("../../../../..")).commons.ChatThread),
});

export declare namespace GlobalEventChatMessage {
    interface Raw {
        thread: serializers.commons.ChatThread.Raw;
    }
}
