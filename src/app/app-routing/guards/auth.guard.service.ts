import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, Route } from "@angular/router";

import { AuthService } from "../../auth/auth.service";
import { CanLoad } from "@angular/router/src/interfaces";

@Injectable()

export class AuthGuard implements CanActivate, CanLoad{
    constructor(private authService: AuthService, private router: Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(!this.authService.isAuth()){
            this.router.navigate(['/signin']);
            return false;
        }
        return true;
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        if(!this.authService.isAuth()){
            this.router.navigate(['/signin']);
            return false;
        }
        return true;
    }

}
