/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetApi } from "@rivet-gg/api";

/**
 * A region that the player can connect to.
 */
export interface RegionInfo {
    regionId: RivetApi.commons.Identifier;
    providerDisplayName: string;
    regionDisplayName: string;
    datacenterCoord: RivetApi.commons.Coord;
    datacenterDistanceFromClient: RivetApi.commons.Distance;
}
