declare var  google :any
import { Injectable ,inject} from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
router=inject(Router)
  constructor() { }
  signOut(){
    sessionStorage.removeItem("user")
    google.accounts.id.disableAutoSelect()
    console.log("hai");
    
    this.router.navigate(["/"])
  }
}
