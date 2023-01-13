/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const IdentityLinkedAccount: core.schemas.Schema<
  serializers.commons.IdentityLinkedAccount.Raw,
  RivetRivet.commons.IdentityLinkedAccount
> = core.schemas
  .union("type", {
    email: core.schemas.lazyObject(async () => (await import("../../../../..")).commons.IdentityEmailLinkedAccount),
  })
  .transform<RivetRivet.commons.IdentityLinkedAccount>({
    parse: (value) => {
      switch (value.type) {
        case "email":
          return RivetRivet.commons.IdentityLinkedAccount.email(value);
        default:
          return RivetRivet.commons.IdentityLinkedAccount._unknown(value);
      }
    },
    json: (value) => value as any,
  });

export declare namespace IdentityLinkedAccount {
  type Raw = IdentityLinkedAccount.Email;

  interface Email extends serializers.commons.IdentityEmailLinkedAccount.Raw {
    type: "email";
  }
}
