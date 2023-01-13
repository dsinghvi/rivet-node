/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const Bio: core.schemas.Schema<serializers.commons.Bio.Raw, RivetRivet.commons.Bio> = core.schemas.string();

export declare namespace Bio {
  type Raw = string;
}
