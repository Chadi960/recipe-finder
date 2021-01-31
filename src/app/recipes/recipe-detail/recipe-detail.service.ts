import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';

//Need to implement a resolver
@Injectable()
export class RecipeDetailService {

    constructor(private httpclient: HttpClient, private config: AppConfig){}

    private BaseURI = this.config.setting['PathAPI'];

    getRecipeDetail(id: string): Observable<any> {
          return this.httpclient.get(this.BaseURI + id + "/summary");
    }

}
