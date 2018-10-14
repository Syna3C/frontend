import { StorageConstants } from '../constants/storage';
import { IState } from '../interfaces/IState';

export class PersistenceHelper {

  /**
   * Attempts to restore the state of the app by retrieving
   * the state from localStorage or sessionStorage.
   *
   * If the state is not found, or if the stored state has a data
   * corruption issue, a null value is returned
   */
  public static restoreState(): IState | null {
    const storedStateStr = localStorage.getItem(StorageConstants.STATE_STORAGE_KEY)
      || sessionStorage.getItem(StorageConstants.STATE_STORAGE_KEY)
    let storedState: IState | null = null;
    try {
      if (storedStateStr != null) {
        storedState = JSON.parse(storedStateStr) as IState
      }
    } catch (err) {
      storedState = null
    }

    return storedState;
  }

  /**
   * Persists the state of the app to localStorage or sessionStorage,
   * as determined by the user's "remember me" setting.
   *
   * @param state
   */
  public static persistState(state: IState) {
    (state.userState.rememberMe ? localStorage : sessionStorage).setItem(StorageConstants.STATE_STORAGE_KEY, JSON.stringify(state))
  }

  /**
   * Clears the state from local and session storage
   */
  public static clearState() {
    localStorage.removeItem(StorageConstants.STATE_STORAGE_KEY)
    sessionStorage.removeItem(StorageConstants.STATE_STORAGE_KEY)
  }
}

