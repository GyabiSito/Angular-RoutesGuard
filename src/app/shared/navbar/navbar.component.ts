import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  textButton: string = "Login";
  
  constructor(private auth:AuthService, private router:Router){}
  
  ngOnInit(): void {
    if(this.auth.isLogged || localStorage.getItem('token')){
      this.textButton = "Logout";
    }
  }

  onLoginLogout() {
    if (this.textButton === "Login") {
      this.textButton = "Logout";
      this.auth.login();
      this.router.navigateByUrl('admin')
    } else {
      this.textButton = "Login";
      this.auth.logout();
      this.router.navigateByUrl('home');
      localStorage.removeItem('token');
    }
  }
}
