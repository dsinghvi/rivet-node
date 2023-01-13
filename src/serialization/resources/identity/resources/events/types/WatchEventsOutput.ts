/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const WatchEventsOutput: core.schemas.ObjectSchema<
  serializers.identity.WatchEventsOutput.Raw,
  RivetRivet.identity.WatchEventsOutput
> = core.schemas.object({
  events: core.schemas.list(core.schemas.lazyObject(async () => (await import("../../../../..")).identity.GlobalEvent)),
  watch: core.schemas.lazyObject(async () => (await import("../../../../..")).commons.WatchResponse),
});

export declare namespace WatchEventsOutput {
  interface Raw {
    events: serializers.identity.GlobalEvent.Raw[];
    watch: serializers.commons.WatchResponse.Raw;
  }
}
