/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const WatchResponse: core.schemas.ObjectSchema<
  serializers.commons.WatchResponse.Raw,
  RivetRivet.commons.WatchResponse
> = core.schemas.object({
  index: core.schemas.string(),
});

export declare namespace WatchResponse {
  interface Raw {
    index: string;
  }
}
