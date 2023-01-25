/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { RivetApi } from "@rivet-gg/api";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.RivetApiEnvironment | environments.RivetApiEnvironmentUrls;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * If `is_closed` is `true`, players will be prevented from joining the lobby.
     * Does not shutdown the lobby.
     *
     */
    public async setClosed(request: RivetApi.matchmaker.SetLobbyClosedInput): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetApiEnvironment.Production).Matchmaking,
                "/lobbies/closed"
            ),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.matchmaker.lobbies.setClosed.Request.json({
                isClosed: request.isClosed,
            }),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.RivetApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RivetApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RivetApiTimeoutError();
            case "unknown":
                throw new errors.RivetApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Finds a lobby based on the given criteria.
     * If a lobby is not found and `prevent_auto_create_lobby` is `true`,
     * a new lobby will be created.
     *
     */
    public async find(request: RivetApi.matchmaker.FindLobbyInput): Promise<RivetApi.matchmaker.FindLobbyOutput> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetApiEnvironment.Production).Matchmaking,
                "/lobbies/find"
            ),
            method: "POST",
            headers: {
                origin: request.origin,
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.matchmaker.lobbies.find.Request.json({
                gameModes: request.gameModes,
                regions: request.regions,
                preventAutoCreateLobby: request.preventAutoCreateLobby,
                captcha: request.captcha,
            }),
        });
        if (_response.ok) {
            return await serializers.matchmaker.lobbies.find.Response.parse(
                _response.body as serializers.matchmaker.lobbies.find.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.RivetApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RivetApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RivetApiTimeoutError();
            case "unknown":
                throw new errors.RivetApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Joins a specific lobby.
     * This request will use the direct player count configured for the
     * lobby group.
     *
     */
    public async join(request: RivetApi.matchmaker.JoinLobbyInput): Promise<RivetApi.matchmaker.JoinLobbyOutput> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetApiEnvironment.Production).Matchmaking,
                "/lobbies/join"
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.matchmaker.lobbies.join.Request.json({
                lobbyId: request.lobbyId,
                captcha: request.captcha,
            }),
        });
        if (_response.ok) {
            return await serializers.matchmaker.lobbies.join.Response.parse(
                _response.body as serializers.matchmaker.lobbies.join.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.RivetApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RivetApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RivetApiTimeoutError();
            case "unknown":
                throw new errors.RivetApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Lists all open lobbies.
     */
    public async list(): Promise<RivetApi.matchmaker.ListLobbiesOutput> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.RivetApiEnvironment.Production).Matchmaking,
                "/lobbies/list"
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.matchmaker.lobbies.list.Response.parse(
                _response.body as serializers.matchmaker.lobbies.list.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.RivetApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.RivetApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.RivetApiTimeoutError();
            case "unknown":
                throw new errors.RivetApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
