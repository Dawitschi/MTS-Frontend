import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Account } from '../../Objects/Account';
import { AccountService } from '../../Services/Account/account.service';
import { response } from 'express';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { error } from 'console';
import { NgModel } from '@angular/forms';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule,
     TopBarComponent, FooterComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
