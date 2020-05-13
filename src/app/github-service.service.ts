import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Profile } from './Profile';
import { repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  currentProfile: Profile;
  repos:repos[];

  constructor(private http:HttpClient) { }

  getProfiles(url):Observable<Profile>{
    return this.http.get<Profile>(environment.API_URL + "/" + url);
  }

  getRepos(url):Observable<repos[]> {
    return this.http.get<repos[]>(environment.API_URL_REPOS + "/" + url + "/repos");
  }
}
