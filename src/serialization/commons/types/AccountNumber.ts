/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { RivetIdentity } from "@fern-api/rivet-identity";
import * as core from "../../../core";

export const AccountNumber: core.schemas.Schema<serializers.AccountNumber.Raw, RivetIdentity.AccountNumber> =
  core.schemas.number();

export declare namespace AccountNumber {
  type Raw = number;
}
