import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";


export class LoginInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log('LoginIntercaptor has arrived');
        return next.handle(req);
    }
}