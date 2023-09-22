import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PharmaciesComponent } from "./pharmacies.component";
import { ListPharmacieComponent } from "./list-pharmacie/list-pharmacie.component";
// import { RolesComponent } from "./children/roles/roles.component";
// import { UsersComponent } from "./children/users/users.component";


const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {
        path: '', component: PharmaciesComponent,
        children: [
            {path: 'list', component: ListPharmacieComponent},
            // {path: 'roles', component: RolesComponent}
        ]
    },
    // {path: 'list', component: ListPharmacieComponent},
    // {path: 'roles', component: RolesComponent}

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PharmaciesRoutingModule {}