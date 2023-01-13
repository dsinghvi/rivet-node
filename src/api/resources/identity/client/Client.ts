/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { RivetRivet } from "@fern-api/rivet";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import { Client as ActivitiesClient } from "../resources/activities/client/Client";
import { Client as EventsClient } from "../resources/events/client/Client";
import { Client as LinksClient } from "../resources/links/client/Client";

export declare namespace Client {
  interface Options {
    environment?: environments.RivetRivetEnvironment | string;
    token?: core.Supplier<core.BearerToken>;
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async setup(request: RivetRivet.SetupIdentityInput): Promise<RivetRivet.identity.setup.Response> {
    const _queryParams = new URLSearchParams();
    _queryParams.append("identity_link_token", request.identityLinkToken);
    if (request.watchIndex != null) {
      _queryParams.append("watch_index", request.watchIndex);
    }

    const _response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.RivetRivetEnvironment.Production, "/identities"),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      queryParameters: _queryParams,
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.identity.setup.Response.parse(
          _response.body as serializers.identity.setup.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.setup.Error._unknown(_response.error),
    };
  }

  public async getProfile(
    identityId: string,
    request?: RivetRivet.GetIdentityProfileInput
  ): Promise<RivetRivet.identity.getProfile.Response> {
    const _queryParams = new URLSearchParams();
    if (request?.watchIndex != null) {
      _queryParams.append("watch_index", request?.watchIndex);
    }

    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        `/identities/${identityId}/profile`
      ),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      queryParameters: _queryParams,
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.identity.getProfile.Response.parse(
          _response.body as serializers.identity.getProfile.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.getProfile.Error._unknown(_response.error),
    };
  }

  public async getSelfProfile(
    request?: RivetRivet.GetIdentitySelfProfileInput
  ): Promise<RivetRivet.identity.getSelfProfile.Response> {
    const _queryParams = new URLSearchParams();
    if (request?.watchIndex != null) {
      _queryParams.append("watch_index", request?.watchIndex);
    }

    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        "/identities/self/profile"
      ),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      queryParameters: _queryParams,
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.identity.getSelfProfile.Response.parse(
          _response.body as serializers.identity.getSelfProfile.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.getSelfProfile.Error._unknown(_response.error),
    };
  }

  public async getIdentityHandles(
    request: RivetRivet.GetIdentityHandlesInput
  ): Promise<RivetRivet.identity.getIdentityHandles.Response> {
    const _queryParams = new URLSearchParams();
    if (Array.isArray(request.identityIds)) {
      for (const _item of request.identityIds) {
        _queryParams.append("identity_ids", _item);
      }
    } else {
      _queryParams.append("identity_ids", request.identityIds);
    }

    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        "/identities/batch/handle"
      ),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      queryParameters: _queryParams,
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.identity.getIdentityHandles.Response.parse(
          _response.body as serializers.identity.getIdentityHandles.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.getIdentityHandles.Error._unknown(_response.error),
    };
  }

  public async getIdentitySummaries(
    request: RivetRivet.GetIdentitySummariesInput
  ): Promise<RivetRivet.identity.getIdentitySummaries.Response> {
    const _queryParams = new URLSearchParams();
    if (Array.isArray(request.identityIds)) {
      for (const _item of request.identityIds) {
        _queryParams.append("identity_ids", _item);
      }
    } else {
      _queryParams.append("identity_ids", request.identityIds);
    }

    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        "/identities/batch/summary"
      ),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      queryParameters: _queryParams,
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.identity.getIdentitySummaries.Response.parse(
          _response.body as serializers.identity.getIdentitySummaries.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.getIdentitySummaries.Error._unknown(_response.error),
    };
  }

  public async updateIdentityProfile(
    request?: RivetRivet.UpdateIdentityProfileInput
  ): Promise<RivetRivet.identity.updateIdentityProfile.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        "/identities/self/profile"
      ),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.identity.updateIdentityProfile.Request.json({
        displayName: request?.displayName,
        accountNumber: request?.accountNumber,
        bio: request?.bio,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.updateIdentityProfile.Error._unknown(_response.error),
    };
  }

  public async validateIdentityProfile(
    request?: RivetRivet.ValidateIdentityProfileInput
  ): Promise<RivetRivet.identity.validateIdentityProfile.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        "/identities/self/profile/validate"
      ),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.identity.validateIdentityProfile.Request.json({
        displayName: request?.displayName,
        accountNumber: request?.accountNumber,
        bio: request?.bio,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.validateIdentityProfile.Error._unknown(_response.error),
    };
  }

  public async search(request: RivetRivet.SearchIdentitiesInput): Promise<RivetRivet.identity.search.Response> {
    const _queryParams = new URLSearchParams();
    _queryParams.append("query", request.query);
    if (request.anchor != null) {
      _queryParams.append("anchor", request.anchor);
    }

    if (request.limit != null) {
      _queryParams.append("limit", request.limit.toString());
    }

    const _response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.RivetRivetEnvironment.Production, "/identities/search"),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      queryParameters: _queryParams,
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.identity.search.Response.parse(
          _response.body as serializers.identity.search.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.search.Error._unknown(_response.error),
    };
  }

  public async setGameActivity(
    request: RivetRivet.SetIdentityGameActivityInput
  ): Promise<RivetRivet.identity.setGameActivity.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        "/identities/self/activity"
      ),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.identity.setGameActivity.Request.json({
        gameActivity: request.gameActivity,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.setGameActivity.Error._unknown(_response.error),
    };
  }

  public async removeGameActivity(): Promise<RivetRivet.identity.removeGameActivity.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        "/identities/self/activity"
      ),
      method: "DELETE",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.removeGameActivity.Error._unknown(_response.error),
    };
  }

  public async updateIdentityStatus(
    request: RivetRivet.UpdateIentityStatusInput
  ): Promise<RivetRivet.identity.updateIdentityStatus.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        "/identities/identities/self/status"
      ),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.identity.updateIdentityStatus.Request.json({
        status: request.status,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.updateIdentityStatus.Error._unknown(_response.error),
    };
  }

  public async follow(identityId: string): Promise<RivetRivet.identity.follow.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        `/identities/${identityId}/follow`
      ),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.follow.Error._unknown(_response.error),
    };
  }

  public async unfollow(identityId: string): Promise<RivetRivet.identity.unfollow.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        `/identities/${identityId}/follow`
      ),
      method: "DELETE",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.unfollow.Error._unknown(_response.error),
    };
  }

  public async prepareIdentityAvatarUpload(
    request: RivetRivet.PrepareIdentityAvatarUploadInput
  ): Promise<RivetRivet.identity.prepareIdentityAvatarUpload.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        "/identities/avatar-upload/prepare"
      ),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.identity.prepareIdentityAvatarUpload.Request.json({
        path: request.path,
        mime: request.mime,
        contentLength: request.contentLength,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.identity.prepareIdentityAvatarUpload.Response.parse(
          _response.body as serializers.identity.prepareIdentityAvatarUpload.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.prepareIdentityAvatarUpload.Error._unknown(_response.error),
    };
  }

  public async completeIdentityAvatarUpload(
    uploadId: string
  ): Promise<RivetRivet.identity.completeIdentityAvatarUpload.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        `/identities/avatar-upload/${uploadId}/complete`
      ),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.completeIdentityAvatarUpload.Error._unknown(_response.error),
    };
  }

  public async signupForBeta(
    request: RivetRivet.SignupForBetaInput
  ): Promise<RivetRivet.identity.signupForBeta.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        "/identities/self/beta-signup"
      ),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.identity.signupForBeta.Request.json({
        name: request.name,
        companyName: request.companyName,
        companySize: request.companySize,
        preferredTools: request.preferredTools,
        goals: request.goals,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.signupForBeta.Error._unknown(_response.error),
    };
  }

  public async report(
    identityId: string,
    request: RivetRivet.ReportIdentityInput
  ): Promise<RivetRivet.identity.report.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        `/identities/${identityId}/report`
      ),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.identity.report.Request.json({
        reason: request.reason,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.report.Error._unknown(_response.error),
    };
  }

  public async listFollowers(
    identityId: string,
    request?: RivetRivet.ListFollowersInput
  ): Promise<RivetRivet.identity.listFollowers.Response> {
    const _queryParams = new URLSearchParams();
    if (request?.anchor != null) {
      _queryParams.append("anchor", request?.anchor);
    }

    if (request?.limit != null) {
      _queryParams.append("limit", request?.limit);
    }

    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        `/identities/${identityId}/followers`
      ),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      queryParameters: _queryParams,
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.identity.listFollowers.Response.parse(
          _response.body as serializers.identity.listFollowers.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.listFollowers.Error._unknown(_response.error),
    };
  }

  public async listFriends(request?: RivetRivet.ListFriendsInput): Promise<RivetRivet.identity.listFriends.Response> {
    const _queryParams = new URLSearchParams();
    if (request?.anchor != null) {
      _queryParams.append("anchor", request?.anchor);
    }

    if (request?.limit != null) {
      _queryParams.append("limit", request?.limit);
    }

    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        "/identities/self/friends"
      ),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      queryParameters: _queryParams,
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.identity.listFriends.Response.parse(
          _response.body as serializers.identity.listFriends.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.listFriends.Error._unknown(_response.error),
    };
  }

  public async listMutualFriends(
    identityId: string,
    request?: RivetRivet.ListMutualFriendsInput
  ): Promise<RivetRivet.identity.listMutualFriends.Response> {
    const _queryParams = new URLSearchParams();
    if (request?.anchor != null) {
      _queryParams.append("anchor", request?.anchor);
    }

    if (request?.limit != null) {
      _queryParams.append("limit", request?.limit);
    }

    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.RivetRivetEnvironment.Production,
        `/identities/${identityId}/mutual-friends`
      ),
      method: "GET",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      queryParameters: _queryParams,
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.identity.listMutualFriends.Response.parse(
          _response.body as serializers.identity.listMutualFriends.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: RivetRivet.identity.listMutualFriends.Error._unknown(_response.error),
    };
  }

  #activities: ActivitiesClient | undefined;

  public get activities(): ActivitiesClient {
    return (this.#activities ??= new ActivitiesClient(this.options));
  }

  #events: EventsClient | undefined;

  public get events(): EventsClient {
    return (this.#events ??= new EventsClient(this.options));
  }

  #links: LinksClient | undefined;

  public get links(): LinksClient {
    return (this.#links ??= new LinksClient(this.options));
  }
}
