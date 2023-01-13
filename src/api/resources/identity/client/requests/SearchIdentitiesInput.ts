/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SearchIdentitiesInput {
  /**
   * The query to match identity display names and account numbers against.
   */
  query: string;
  /**
   * How many identities to offset the search by.
   */
  anchor?: string;
  /**
   * Amount of identities to return. Must be between 1 and 32 inclusive.
   */
  limit?: number;
}
