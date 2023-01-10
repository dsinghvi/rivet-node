/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { RivetIdentity } from "@fern-api/rivet-identity";
import * as core from "../../../core";

export const InternalError: core.schemas.Schema<serializers.InternalError.Raw, RivetIdentity.InternalError> =
  core.schemas.lazyObject(async () => (await import("../..")).InternalErrorResponseContent);

export declare namespace InternalError {
  type Raw = serializers.InternalErrorResponseContent.Raw;
}
