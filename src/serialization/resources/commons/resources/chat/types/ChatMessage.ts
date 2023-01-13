/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const ChatMessage: core.schemas.ObjectSchema<
  serializers.commons.ChatMessage.Raw,
  RivetRivet.commons.ChatMessage
> = core.schemas.object({
  chatMessageId: core.schemas.property("chat_message_id", core.schemas.string()),
  threadId: core.schemas.property("thread_id", core.schemas.string()),
  sendTs: core.schemas.property(
    "send_ts",
    core.schemas.lazy(async () => (await import("../../../../..")).commons.Timestamp)
  ),
});

export declare namespace ChatMessage {
  interface Raw {
    chat_message_id: string;
    thread_id: string;
    send_ts: serializers.commons.Timestamp.Raw;
  }
}
