/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.identity.getProfile.Response.Raw,
    RivetApi.GetIdentityProfileOutput
> = core.serialization.lazyObject(async () => (await import("../../..")).GetIdentityProfileOutput);

export declare namespace Response {
    type Raw = serializers.GetIdentityProfileOutput.Raw;
}
