import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../../Services/Account/account.service';
import { LogInService } from '../../Services/LogIn/logIn.service';

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterOutlet],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent implements OnInit{
  form!: FormGroup;
  loading = false;
  submitted = false;
  login:boolean = true;

  constructor(
    private logInService: LogInService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      token: []
  });  
  }

  onSubmit() {
    this.submitted = true; 

    if (this.form.invalid) {
      return;
    }
    
    this.loading = true;
    this.logInService.login(this.form.controls['password'].value, this.form.controls['username'].value).subscribe(data => console.log(data))
  }
}
