/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const ChatThreadExternalLinks: core.schemas.ObjectSchema<
  serializers.commons.ChatThreadExternalLinks.Raw,
  RivetRivet.commons.ChatThreadExternalLinks
> = core.schemas.object({
  chat: core.schemas.string(),
});

export declare namespace ChatThreadExternalLinks {
  interface Raw {
    chat: string;
  }
}
