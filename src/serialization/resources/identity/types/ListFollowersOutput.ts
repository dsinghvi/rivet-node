/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../core";

export const ListFollowersOutput: core.schemas.ObjectSchema<
  serializers.ListFollowersOutput.Raw,
  RivetRivet.ListFollowersOutput
> = core.schemas.object({
  identities: core.schemas.list(core.schemas.lazyObject(async () => (await import("../../..")).commons.IdentityHandle)),
});

export declare namespace ListFollowersOutput {
  interface Raw {
    identities: serializers.commons.IdentityHandle.Raw[];
  }
}
