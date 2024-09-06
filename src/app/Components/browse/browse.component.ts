import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  name=JSON.parse(sessionStorage.getItem("user")!).name
  email=JSON.parse(sessionStorage.getItem("user")!).email
  
  picture=JSON.parse(sessionStorage.getItem("user")!).picture
auth =inject(AuthService)
signOut(){this.auth.signOut()}
}
