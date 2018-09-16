import { IPagination } from "../interfaces/IPagination";

export class Pagination {
  private _currentPage: number;
  private _numItems: number;
  private _totalPages: number;
  private _pageSize: number;

  constructor(json: IPagination) {
    this._currentPage = json.currentPage;
    this._numItems = json.numItems;
    this._totalPages = json.totalPages;
    this._pageSize = json.pageSize
  }

  public get currentPage(): number {
    return this._currentPage;
  }

  public get numItems(): number {
    return this._numItems;
  }

  public get totalPages(): number {
    return this._totalPages;
  }

  public get pageSize(): number {
    return this._pageSize;
  }
}