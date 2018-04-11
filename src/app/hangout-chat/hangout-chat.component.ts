import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hangout-chat-component',
  templateUrl: './hangout-chat.component.html',
  styleUrls: ['./hangout-chat.component.css']
})

export class HangoutChatComponent implements OnInit {
  messages: Array<string>;

  constructor() {
    this.messages = [];
  }

  ngOnInit() {
  }

  send(event) {
    this.messages.push(event.target.value);
  }
}
