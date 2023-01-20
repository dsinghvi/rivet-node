/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../core";

export const ListFollowersOutput: core.serialization.ObjectSchema<
    serializers.ListFollowersOutput.Raw,
    RivetApi.ListFollowersOutput
> = core.serialization.object({
    identities: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).commons.IdentityHandle)
    ),
});

export declare namespace ListFollowersOutput {
    interface Raw {
        identities: serializers.commons.IdentityHandle.Raw[];
    }
}
