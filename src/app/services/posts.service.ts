import {Injectable, EventEmitter} from '@angular/core';
import {Headers, Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ConfigService} from './config.service';
import {PostsResponse} from '../models/postsResponse.model';
import {Post} from '../models/post.model';
import {Posts} from '../models/posts.model';
import {Pagination} from '../models/pagination.model';
import {Photo} from '../models/photo.model';
import {Tag} from '../models/tag.model';

@Injectable()

export class PostsService {
  public InvalidResponseException = 'Invalid response';
  private serviceEndpoint: string;
  private endpointPostfix: String = '/posts/';

  constructor(private http: Http, private configService: ConfigService) {
  }

  private getServiceEndpoint(): string {
    if (!this.serviceEndpoint) {
      this.serviceEndpoint = this.configService.getOption('apiUrl') + this.endpointPostfix;
    }

    return this.serviceEndpoint;
  }

  private convertNavigation(responseNavigation: any): Pagination {
    let pagination: Pagination = new Pagination(responseNavigation.page, responseNavigation.limit, responseNavigation.count);
    return pagination;
  }

  private convertPhotos(responsePhotos: any): Array<Photo> {
    let photos: Array<Photo> = [];

    try {
      responsePhotos.forEach((photo: any) => {
        photos.push(new Photo(photo.filename, new Date(photo.timestamp)));
      });
    } catch (e) {
      throw this.InvalidResponseException;
    }

    return photos;
  }

  private convertTags(responseTags: any): Array<Tag> {
    let tags: Array<Tag> = [];

    try {
      responseTags.forEach((responseTag: any) => {
        tags.push(new Tag(responseTag.name));
      });
    } catch (e) {
      throw this.InvalidResponseException;
    }

    return tags;
  }

  private convertPostItems(responseItems: any): Array<Post> {
    let items: Array<Post> = [];

    responseItems.forEach( (responseItem: Post) => {
      let photos = this.convertPhotos(responseItem.photos);
      let tags = this.convertTags(responseItem.tags);
      items.push(new Post(responseItem._id, responseItem.timestamp, responseItem.title, photos, tags));
    });

    return items;
  }

  private getHeaders(): Headers {
    return new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
//      'Content-Type': 'application/json'
    });
  }

  updateTitle(id, title): Observable<any> {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('title', title);

    return this.http.put(
      this.getServiceEndpoint() + id,
      urlSearchParams,
      options
    )
      .map(response => response.json())
      .catch(this.handleError);
  }

  updateTags(id, tags): Observable<any> {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('tags', JSON.stringify(tags));

    return this.http.put(
      this.getServiceEndpoint() + id,
      urlSearchParams,
      options
    )
      .map(response => response.json())
      .catch(this.handleError);
  }

  getPosts(navigation: Pagination): Observable<Posts> {
    let parameters: URLSearchParams,
      options: RequestOptions;

    parameters = new URLSearchParams();
    parameters.set('page', String(navigation.page));
    parameters.set('limit', String(navigation.limit));

    options = new RequestOptions({
      search: parameters,
      headers: this.getHeaders()
    });

    return this.http.get(this.getServiceEndpoint(), options)
      .map((response: Response) => {
        return response.json();
/*
        let postsResponse: PostsResponse = response.json();
        let postItems: Array<Post> = this.convertPostItems(postsResponse.data);
        let pagination: NavigationModel = this.convertNavigation(postsResponse.pagination);

        return new Posts(postItems, pagination);
        */
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('PostsService::handleError', error);
    return Observable.throw(error);
  }
}
