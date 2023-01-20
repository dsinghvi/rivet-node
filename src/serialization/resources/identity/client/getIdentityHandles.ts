/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.identity.getIdentityHandles.Response.Raw,
    RivetApi.GetIdentityHandlesOutput
> = core.serialization.lazyObject(async () => (await import("../../..")).GetIdentityHandlesOutput);

export declare namespace Response {
    type Raw = serializers.GetIdentityHandlesOutput.Raw;
}
