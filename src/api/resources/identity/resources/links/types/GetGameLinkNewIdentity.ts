/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetApi } from "@fern-api/rivet";

export interface GetGameLinkNewIdentity {
    identityToken: RivetApi.commons.Jwt;
    identityTokenExpireTs: RivetApi.commons.Timestamp;
    identity: RivetApi.commons.IdentityProfile;
}
