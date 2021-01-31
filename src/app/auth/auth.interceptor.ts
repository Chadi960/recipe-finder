import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            const clonedReq = req.clone({
                headers: req.headers.set('x-rapidapi-key', '31872d56b4mshead2a138430460cp159015jsn45e3ae74a537')
                                    .set('x-rapidapi-host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com')
            });
        
            return next.handle(clonedReq);
    }
}