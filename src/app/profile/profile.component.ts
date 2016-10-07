import { Component, OnInit, OnDestroy } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import { Subscription } from 'rxjs/Subscription';

import gql from 'graphql-tag';

const CurrentUserQuery = gql`
  query CurrentUserForProfile {
    currentUser {
      login
      avatar_url
    }
  }
`;

@Component({
  selector: 'githunt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  currentUser: any;
  currentUserSub: Subscription;

  constructor(
    private apollo: Angular2Apollo
  ) { }

  ngOnInit() {
    this.currentUserSub = this.apollo.watchQuery({
      query: CurrentUserQuery,
    }).subscribe(({data, loading}) => {
      this.currentUser = data.currentUser;
      this.loading = loading;
    });
  }

  ngOnDestroy() {
    this.currentUserSub.unsubscribe();
  }
}
