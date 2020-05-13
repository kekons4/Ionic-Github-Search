import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { Profile } from '../Profile';
import { repos } from '../repos';

@Component({
  selector: 'app-repos-page',
  templateUrl: './repos-page.page.html',
  styleUrls: ['./repos-page.page.scss'],
})
export class ReposPagePage implements OnInit {

  profile:Profile;
  repos:repos[];
  username:string;

  constructor(private serviceGithub:GithubServiceService) { }

  ngOnInit() {
    this.profile = this.serviceGithub.currentProfile;
    this.username = this.profile.login;
    this.serviceGithub.getRepos(this.username)
      .subscribe(data => {
        console.log(data);
        this.repos=data;
      });
  }

}
