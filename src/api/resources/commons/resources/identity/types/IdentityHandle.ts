/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetRivet } from "@fern-api/rivet";

/**
 * An identity handle.
 */
export interface IdentityHandle {
  identityId: string;
  displayName: RivetRivet.commons.DisplayName;
  accountNumber: RivetRivet.commons.AccountNumber;
  /** The URL of this identity's avatar image. */
  avatarUrl: string;
  presence?: RivetRivet.commons.IdentityPresence;
  party?: RivetRivet.commons.PartyHandle;
  /** Whether or not this identity is registered with a linked account. */
  isRegistered: boolean;
  external: RivetRivet.commons.IdentityExternalLinks;
}
