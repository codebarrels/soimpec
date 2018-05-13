import { Component } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { UserService } from './userService';
import { GoogleApiService } from 'ng-gapi';
import { SheetResource } from './sheetResource'

@Component({
  selector: 'google-api-component',
  templateUrl: './google-api.component.html',
})
export class GoogleApiComponent  {
  public sheetId: string;
  public sheet: any;
  public foundSheet: any;

  constructor(private userService: UserService,
              private sheetResource: SheetResource,
              private authService: GoogleAuthService,
              private gapiService: GoogleApiService) {
     // First make sure gapi is loaded can be in AppInitilizer
     this.gapiService.onLoad().subscribe();
  }

  public isLoggedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

  public signIn() {
    this.userService.signIn();
  }

  public create() {
    this.sheetResource.create(this.userService.getToken())
      .subscribe( res => this.sheet = res );
  }

  public findSheet() {
    if (!this.sheetId) {
      console.warn("no sheet id provided");
      return;
    }

    this.sheetResource.findById(this.sheetId, this.userService.getToken())
      .subscribe( res=> this.foundSheet = res);
  }
}