import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

public userid:any;
public userdata:any;
//if u want to create just the post without profile then create just a plain post route and then use it 

//gives snapshot of current url
  constructor (private route: ActivatedRoute, private service: UserService){}

  ngOnInit():void{
     this.userid=this.route.snapshot.paramMap.get('userid');
     this.service.getUser(this.userid).subscribe((data:any)=>
     {console.log(data);
    this.userdata = data;
    
    });
  }




}
