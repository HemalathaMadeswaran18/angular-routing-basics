import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

public users:Array<any> = [];

  constructor(private service:UserService) {}

  ngOnInit(): void {
this.service.getUsers().subscribe((data:any)=>{
  console.log(data.data);
  this.users=data.data;
});
  }

}
