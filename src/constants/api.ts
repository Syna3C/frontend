export class ApiConstants {
  public static BASE_URL = process.env.REACT_APP_BASE_URL;
  public static API_VERSION = 1;
  public static API_URL = `${ApiConstants.BASE_URL}/v${ApiConstants.API_VERSION}`;
  // Users
  public static LOGIN_URL = `${ApiConstants.API_URL}/login`;
}