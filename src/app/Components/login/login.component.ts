declare var google: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    google.account.id.initialize({
      client_id: '',
      callback: (resp: any) => {},
    });
    google.account.id.renderButton(document.getElementById('google-button'));
  }
}
