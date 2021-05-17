import {Component, OnInit} from '@angular/core';
import {Auth} from "../../classes/auth";
import {User} from "../../../../../common/src/lib/interfaces/user";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: User;

  constructor() {
  }

  ngOnInit(): void {
    this.user = Auth.user;
  }

  logout(){
    localStorage.clear();
  }
}
