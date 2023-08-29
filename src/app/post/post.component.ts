import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public userid:any;
  public posts:any;

  constructor(private route:ActivatedRoute,private service:UserService) {}


  ngOnInit(){
    this.route.parent?.params.subscribe((params:any)=>{
      this.service.getUserPosts(params['userid']).subscribe((data:any)=>{
        data.data;
        this.posts = data.data;
        console.log(this.posts);
      }
      )
    })
  }

}
