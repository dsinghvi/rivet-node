/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export const GroupHandle: core.schemas.ObjectSchema<
  serializers.commons.GroupHandle.Raw,
  RivetRivet.commons.GroupHandle
> = core.schemas.object({
  groupId: core.schemas.property("group_id", core.schemas.string()),
  displayName: core.schemas.property(
    "display_name",
    core.schemas.lazy(async () => (await import("../../../../..")).commons.DisplayName)
  ),
  avatarUrl: core.schemas.property("avatar_url", core.schemas.string()),
  external: core.schemas.lazyObject(async () => (await import("../../../../..")).commons.GroupExternalLinks),
  isDeveloper: core.schemas.property("is_developer", core.schemas.boolean().optional()),
});

export declare namespace GroupHandle {
  interface Raw {
    group_id: string;
    display_name: serializers.commons.DisplayName.Raw;
    avatar_url: string;
    external: serializers.commons.GroupExternalLinks.Raw;
    is_developer?: boolean | null;
  }
}
