import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent {
  responses: string[] = ["Registration", "Payment", "Query"];

  constructor( private router: Router){}

  navigateToHome(){
    this.router.navigate(['scanner'])
  }

}
