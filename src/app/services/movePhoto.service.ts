import {Injectable, EventEmitter} from '@angular/core';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ConfigService} from './config.service';
import {PhotoModel} from '../Models/photo.model';
import {PostModel} from '../Models/post.model';

@Injectable()

export class MovePhotoService {
  private serviceEndpoint: string;
  private endpointPostfix: String = '/movephoto/';

  constructor(private http: Http, private configService: ConfigService) {
  }

  private getServiceEndpoint(): string {
    if (!this.serviceEndpoint) {
      this.serviceEndpoint = this.configService.getOption('apiUrl') + this.endpointPostfix;
    }

    return this.serviceEndpoint;
  }

  private getHeaders(): Headers {
    return new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  }

  movePhotoToPost(photo: PhotoModel, post: PostModel): Observable<any> {
    let url = this.getServiceEndpoint();
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('photo', photo.filename);
    urlSearchParams.append('postId', post._id.toString());

    return this.http
      .put(url, urlSearchParams, { headers: this.getHeaders() })
      .catch(this.handleError);

  }

  private handleError(error: Response | any) {
    console.error('PresentationService::handleError', error);
    return Observable.throw(error);
  }
}
