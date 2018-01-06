export class PostsResponse {
  data: any;
  navigation: any;

  constructor(data, navigation) {
    this.data = data;
    this.navigation = navigation;
  }
}
