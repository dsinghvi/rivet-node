/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetRivet } from "@fern-api/rivet";
import * as core from "../../../../core";

export type Response = core.APIResponse<void, RivetRivet.identity.removeGameActivity.Error>;
export type Error = RivetRivet.identity.removeGameActivity.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    statusCode: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: RivetRivet.identity.removeGameActivity.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  _unknown: (fetcherError: core.Fetcher.Error): RivetRivet.identity.removeGameActivity.Error._Unknown => {
    return {
      statusCode: undefined,
      content: fetcherError,
      _visit: function <_Result>(
        this: RivetRivet.identity.removeGameActivity.Error._Unknown,
        visitor: RivetRivet.identity.removeGameActivity.Error._Visitor<_Result>
      ) {
        return RivetRivet.identity.removeGameActivity.Error._visit(this, visitor);
      },
    };
  },

  _visit: <_Result>(
    value: RivetRivet.identity.removeGameActivity.Error,
    visitor: RivetRivet.identity.removeGameActivity.Error._Visitor<_Result>
  ): _Result => {
    switch (value.statusCode) {
      default:
        return visitor._other(value as any);
    }
  },
} as const;
