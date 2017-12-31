export class Pagination {
  page: number;
  limit: number;
  count: number;

  constructor(page, limit, count) {
    this.page = page;
    this.limit = limit;
    this.count = count;
  }
}
