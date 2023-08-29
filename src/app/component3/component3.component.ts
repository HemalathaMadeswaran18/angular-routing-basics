import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component {

  public posts:Array<any> = [];
  constructor(private service:UserService){}

  ngOnInit(): void {
    this.service.getPosts().subscribe((data:any)=>{
      console.log(data.data);
      this.posts=data.data;
    });

}
}
