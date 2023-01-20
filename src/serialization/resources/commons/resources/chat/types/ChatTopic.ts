/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const ChatTopic: core.serialization.Schema<serializers.commons.ChatTopic.Raw, RivetApi.commons.ChatTopic> =
    core.serialization
        .union("type", {
            group: core.serialization.lazyObject(async () => (await import("../../../../..")).commons.ChatTopicGroup),
            party: core.serialization.lazyObject(async () => (await import("../../../../..")).commons.ChatTopicParty),
            direct: core.serialization.lazyObject(async () => (await import("../../../../..")).commons.ChatTopicDirect),
        })
        .transform<RivetApi.commons.ChatTopic>({
            parse: (value) => {
                switch (value.type) {
                    case "group":
                        return RivetApi.commons.ChatTopic.group(value);
                    case "party":
                        return RivetApi.commons.ChatTopic.party(value);
                    case "direct":
                        return RivetApi.commons.ChatTopic.direct(value);
                    default:
                        return RivetApi.commons.ChatTopic._unknown(value);
                }
            },
            json: (value) => value as any,
        });

export declare namespace ChatTopic {
    type Raw = ChatTopic.Group | ChatTopic.Party | ChatTopic.Direct;

    interface Group extends serializers.commons.ChatTopicGroup.Raw {
        type: "group";
    }

    interface Party extends serializers.commons.ChatTopicParty.Raw {
        type: "party";
    }

    interface Direct extends serializers.commons.ChatTopicDirect.Raw {
        type: "direct";
    }
}
