import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../core/components/header/header.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
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
