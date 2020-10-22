import { ChallengeListService } from './services/challenge-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss'],
})
export class ChallengeListComponent implements OnInit {
  constructor(private challengeSevice: ChallengeListService) {}

  ngOnInit(): void {
    this.challengeSevice.getUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
