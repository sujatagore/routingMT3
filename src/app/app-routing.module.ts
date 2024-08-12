import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { UserformComponent } from "./shared/components/users/userform/userform.component";
import { UserComponent } from "./shared/components/users/user/user.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { ProductformComponent } from "./shared/components/products/productform/productform.component";
import { ProductComponent } from "./shared/components/products/product/product.component";
import { FairsComponent } from "./shared/components/fairs/fairs.component";
import { FairdetailsComponent } from "./shared/components/fairs/fairdetails/fairdetails.component";
import { PagenotfoundComponent } from "./shared/components/pagenotfound/pagenotfound.component";
import { AuthComponent } from "./shared/components/auth/auth.component";
import { AuthGuard } from "./shared/services/auth.guard";
import { UserroleGuard } from "./shared/services/userrole.guard";

const routes : Routes = [
    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard, UserroleGuard],
        data: {
            userRole : ['buyer', 'admin', 'sa']
        }
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard, UserroleGuard],
        data: {
            userRole : ['admin', 'sa']
        },
        children: [
            {
                path: 'addUser',
                component: UserformComponent
            },
            {
                path: ':userId',
                component: UserComponent
            },
            {
                path: ':userId/editUser',
                component: UserformComponent
            }
        ]
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard, UserroleGuard],
        data: {
            userRole : ['buyer', 'admin', 'sa']
        },
        children: [
            {
                path: 'addProduct',
                component: ProductformComponent
            },
            {
                path: ':productId',
                component: ProductComponent
            },
            {
                path: ':productId/editProduct',
                component: ProductformComponent
            }
        ]
    },
    {
        path: 'fairs',
        component: FairsComponent,
        canActivate: [AuthGuard, UserroleGuard],
        data: {
            userRole : ['sa']
        },
        children: [
            {
                path: ':fairId',
                component: FairdetailsComponent
            }
        ]
    },
    {
        path: 'page-not-found',
        component: PagenotfoundComponent
    },
    {
        path: '**',
        redirectTo: 'page-not-found'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}