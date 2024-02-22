import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any> , next:HttpHandler){
        console.log('AuthInterceptor called');
        // return next.handle(req);

        const modifiedReq= req.clone({headers:req.headers.append('state','Modified Request')});
        return next.handle(modifiedReq).pipe(tap((source)=>{
            if(source.type === HttpEventType.Response){
                    console.log('Response arrived');
                    console.log(source.body);
            }
        }));

        
    }
}