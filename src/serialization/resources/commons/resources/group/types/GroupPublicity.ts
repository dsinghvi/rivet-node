/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const GroupPublicity: core.schemas.Schema<
  serializers.commons.GroupPublicity.Raw,
  RivetRivet.commons.GroupPublicity
> = core.schemas.enum_(["open", "closed"]);

export declare namespace GroupPublicity {
  type Raw = "open" | "closed";
}
