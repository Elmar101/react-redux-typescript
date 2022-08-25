export const USER_BASE_API: string = "https://api.github.com";
export const USER_API_KEY: string = "users";
export const SEARCH_USER_API_KEY: string = "/search/users";
export const GET_USER_REPOSITORY_API_KEY = (username: string): string => `${USER_API_KEY}/${username}/repos`