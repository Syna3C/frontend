export class ApiConstants {
  public static BASE_URL = process.env.REACT_APP_BASE_URL;
  public static API_VERSION = 1;
  public static API_URL = `${process.env.REACT_APP_API_URL}/v${ApiConstants.API_VERSION}`;
  // Users
  public static LOGIN_URL = `${ApiConstants.API_URL}/login`;
  public static SIGNUP_URL = `${ApiConstants.API_URL}/signUp`;

  // Events
  public static GET_EVENTS_URL = `${ApiConstants.API_URL}/events`;
}