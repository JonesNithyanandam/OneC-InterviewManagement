import { Component, OnInit } from '@angular/core';
import { Login } from '../../Shared/Models/login';
// import { AuthService } from '../../Shared/Services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  loginForm!: FormGroup;
  errorMessage!: string;
  constructor(
    // private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.clear();
    this.initFormGroup();
    localStorage.setItem('languageId', '1');
  }
  private initFormGroup() {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  onLoginSubmit(): void {
    console.log(this.login.userName);
    console.log(this.login.password);
    if(this.login.userName==='808390')//Panel User
    {
      const redirect = '/landing';
      this.router.navigate([redirect]);
      localStorage.setItem('userdata', JSON.stringify(this.login.userName + ' '+ this.login.password));
      localStorage.setItem('auth_token', 'PanelUser');
    }
    else if(this.login.userName==='TSC User')//TSC User
    {
      const redirect = '/landing';
      this.router.navigate([redirect]);
      localStorage.setItem('userdata', JSON.stringify(this.login.userName + ' '+ this.login.password));
      localStorage.setItem('auth_token', 'TSCUser');
    }
    else{
      alert('Invalid username or password. Please verify your information.');
    }
  }
}