import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MembersService } from '../../services/members.service';
import { ToastrService } from 'ngx-toastr';
import { PresenceService } from '../../services/presence.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent {
  @Input() member: Member | undefined;

  constructor(
    private membersService: MembersService,
    private toast: ToastrService,
    public presenceService: PresenceService
  ) {}

  addLike(member: Member) {
    this.membersService.addLike(member.userName).subscribe({
      next: () => this.toast.success('You have liked ' + member.knownAs),
    });
  }
}
