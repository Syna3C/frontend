export interface IRolePermissions {
  CreateEvents: boolean;
  CreateSubEvents: boolean;
  CreateThreads: boolean;
  CreateOrganizers: boolean;
  CreateModerators: boolean;
  EditOrganizers: boolean;
  EditModerators: boolean;
  EditEvents: boolean;
  EditSubEvents: boolean;
  EditThreads: boolean;
  CloseEvents: boolean;
  CloseSubEvents: boolean;
  DeleteOrganizer: boolean;
  CloseThreads: boolean;
  DeleteOrganier: boolean;
  DeleteModerators: boolean;
  LockThreads: boolean;
  EditUsers: boolean;
}