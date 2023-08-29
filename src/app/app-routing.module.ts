import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'c1',component:Component1Component},
  {path:'c2',component:Component2Component},
  {path:'c3',component:Component3Component},
  {path:'user',component:UserComponent},
  {path:'profile/:userid',component:ProfileComponent}
];
//this is referenced in the navbar html, these path names are called directly 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//should not route navbar and footerng 