import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm?: FormGroup;
  @ViewChild('userNameInput') userNameInput?: ElementRef;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userName = this.loginForm?.get('userName')?.value;
    const password = this.loginForm?.get('password')?.value;

    this.authService.authenticate(userName, password).subscribe(
      () => this.router.navigate(['user', userName]),
      err => { console.log(err);
            this.loginForm?.reset();
            this.userNameInput?.nativeElement.focus();}
    )
  }

}
