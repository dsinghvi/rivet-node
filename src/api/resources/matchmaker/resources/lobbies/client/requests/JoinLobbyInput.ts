/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetApi } from "@fern-api/rivet";

export interface JoinLobbyInput {
    lobbyId: string;
    captcha?: RivetApi.commons.CaptchaConfig;
}
