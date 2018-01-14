import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ConfigService } from './config.service';

@Injectable()

export class TagService {
  private serviceEndpoint: string;
  private endpointPostfix: String = '/tag/';
  private tags: Array<any> = [];

  constructor(private http: Http, private configService: ConfigService) {
    this.getTags()
      .subscribe(tags => {
      this.tags = tags;
    });
  }

  public getTag(tagName) {
    for (let i in this.tags) {
      if (this.tags[i].name === tagName) {
        return this.tags[i];
      }
    }
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

  getTags(): Observable<any> {
    return this.http.get(this.getServiceEndpoint())
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  addTag(name) {
    let options = new RequestOptions({
      headers: this.getHeaders()
    });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', name);

    return this.http.post(
      this.getServiceEndpoint(),
      urlSearchParams,
      options
    )
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('TagService::handleError', error);
    return Observable.throw(error);
  }
}
