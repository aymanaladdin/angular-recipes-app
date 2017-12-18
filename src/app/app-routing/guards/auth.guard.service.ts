import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from "@angular/router";

import { AuthService } from "../../auth/auth.service";

@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(!this.authService.isAuth()){
            this.router.navigate(['/signin']);
            return false;
        }
        return true;
    }

}
