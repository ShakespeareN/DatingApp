import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Message } from 'src/app/models/message';
import { TimeagoModule } from 'ngx-timeago';
import { MessageService } from '../../services/message.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-messages',
  standalone: true,
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.scss'],
  imports: [CommonModule, TimeagoModule, FormsModule],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm?: NgForm;
  @Input() username?: string;
  // @Input() messages: Message[] = [];
  messageContent = '';

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}

  sendMessage() {
    if (!this.username) return;

    // this.messageService
    //   .sendMessage(this.username, this.messageContent)
    //   .subscribe({
    //     next: (message) => {
    //       // this.messages.push(message);
    //       // this.messageForm?.reset();
    //     },
    //   });
    this.messageService
      .sendMessage(this.username, this.messageContent)
      .then(() => {
        this.messageForm?.reset();
      });
  }
}
