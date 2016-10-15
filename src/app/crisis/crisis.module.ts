import { NgModule }               from '@angular/core';

import { SharedModule }           from "../shared/shared.module";
import { CrisisRoutingModule }    from './crisis-routing.module';

import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
import { CrisisService }          from './crisis.service';
import { CrisisComponent }        from "./crisis.component";
import { CrisisHomeComponent }    from "./crisis-home.component";

@NgModule({
  imports:      [ SharedModule, CrisisRoutingModule ],
  declarations: [ CrisisComponent, CrisisHomeComponent, CrisisDetailComponent, CrisisListComponent ],
  providers:    [ CrisisService ]
})
export class CrisisModule {}
