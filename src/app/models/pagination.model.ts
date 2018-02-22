const defaultPage = 1;
const defaultLimit = 10;
const defaultCount = 0;

export class Pagination {
  page: number;
  limit: number;
  count: number;

  constructor(page?, limit?, count?) {
    this.page = page || defaultPage;
    this.limit = limit || defaultLimit;
    this.count = count || defaultCount;
  }
}
