import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { observable, Subscription } from 'rxjs';
import { APIResponse, Game } from '../../models';
import { HttpService } from '../../../app/services/http.service'


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  public sort!: any;
  public games!: Array<Game>;
  private routeSub!: Subscription;
  private gameSub!: Subscription;
   
  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute, private router: Router, private activatedRouter: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['game-search']){
        this.searchGames('metacrit', params['game-search']);
      }
      else{
        this.searchGames('metacrit');
      }
    });
  }

  searchGames(sort: string, search?: string){
    this.gameSub = this.httpService.getGameList(sort, search).subscribe((gameList: APIResponse<Game>) => {
      this.games = gameList.results;
      console.log(gameList);
    });
  }

  openGameDetails(id: string): void{
    this.router.navigate(['details', id])
  }

  ngOnDestroy():void{
    if(this.gameSub){
      this.gameSub.unsubscribe();
    }

    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
  }
}
