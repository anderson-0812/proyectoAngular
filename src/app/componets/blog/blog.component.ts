import { ArticleService } from './../../services/article.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit() {
    console.log(this._articleService.pruebas());
  }

}
