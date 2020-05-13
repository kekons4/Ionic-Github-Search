import { Component } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { Profile } from '../Profile';
import { repos } from '../repos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  username:string;
  profile:Profile;
  repos:repos[];
  imgWidth=200;
  imgMargin=10;

  constructor(private serviceGithub:GithubServiceService, private router:Router) {}

  searchGitHub(){
    //this.username = username;
    console.log(this.username);
    this.serviceGithub.getProfiles(this.username)
      .subscribe(data => {
        console.log(data);
        this.profile=data;
      });
  }

  showRepos(profile){
    this.serviceGithub.currentProfile = this.profile;
    this.router.navigate(['/repos-page']);
  }

}
