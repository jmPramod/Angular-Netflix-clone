declare var google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private router=inject(Router)
  ngOnInit(): void {
    google.accounts.id.initialize({      client_id: '1021280668282-miblefp97p63395t8h8snhrqh7j6i0iu.apps.googleusercontent.com',
      callback: (resp: any) => {
        console.log(resp);
        this.handleLogin(resp)
        
      },
    });
    google.accounts.id.renderButton(document.getElementById('google-button'),{
      theme:"filled_blue",
      size:"large",
      shape:"rectangular",
      width:350
    });
  }
private decodeToken(token:string){
return JSON.parse(atob(token.split(".")[1]))
}
  handleLogin(response: any): void {
    if(response){
      // 1.decode token
      const payload =this.decodeToken(response.credential)

      //2.store in session
      sessionStorage.setItem("user",JSON.stringify(payload))
      //3.navigate to home   
      this.router.navigate(['browse']) .then(success => {
        if (success) {
          console.log('Navigation successful!');
        } else {
          console.log('Navigation failed!');
        }
      })
      .catch(error => {
        console.error('Navigation error:', error);
      });
    }

  }
}
