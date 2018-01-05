import { Injectable, Inject } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable()

export class ApiConfigModel {
    apiUrl: string;
}

export class ConfigService {
    private config: ApiConfigModel = {
//        apiUrl: 'http://localhost:3000'
        apiUrl: environment.apiUrl
    };

    public setOption(option: string, value: string): void {
        this.config[option] = value;
    }

    public getOption(option: string): string {
        return this.config[option];
    }

    public getConfig(): ApiConfigModel {
        return this.config;
    }
}
