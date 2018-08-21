export class ApiConstants {
  public static BASE_URL = process.env.REACT_APP_CUSTOM_BASE_URL || process.env.REACT_APP_BASE_URL;
  public static API_VERSION = 1;
  public static API_URL = `${process.env.REACT_APP_CUSTOM_API_URL || process.env.REACT_APP_API_URL}/v${ApiConstants.API_VERSION}`;
  // Users
  public static LOGIN_URL = `${ApiConstants.API_URL}/login`;
  public static SIGNUP_URL = `${ApiConstants.API_URL}/signUp`;
}