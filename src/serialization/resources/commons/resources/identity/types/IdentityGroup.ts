/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const IdentityGroup: core.serialization.ObjectSchema<
    serializers.commons.IdentityGroup.Raw,
    RivetApi.commons.IdentityGroup
> = core.serialization.object({
    group: core.serialization.lazyObject(async () => (await import("../../../../..")).commons.GroupHandle),
});

export declare namespace IdentityGroup {
    interface Raw {
        group: serializers.commons.GroupHandle.Raw;
    }
}
