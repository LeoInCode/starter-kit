import { Users } from './../model/users';
import { ChallengeListService } from './services/challenge-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss'],
})
export class ChallengeListComponent implements OnInit {
  constructor(private challengeSevice: ChallengeListService) {}

  users: Users[];

  ngOnInit(): void {
    this.challengeSevice.getGitUsers().subscribe((users: Users[]) => {
      console.log(users);
      this.users = users;
    });
  }

  deleteUser(id: number) {
    this.challengeSevice.deleteUser(id).subscribe((users: Users[]) => {
      console.log(users);
      this.users = users;
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}