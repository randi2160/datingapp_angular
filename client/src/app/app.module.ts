import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { TagInputModule } from "ngx-chips";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';
//import { LandingpageComponent } from './landingpage/landingpage.component';

import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { PopoverModule } from "ngx-bootstrap/popover";
import { TimepickerModule } from "ngx-bootstrap/timepicker";
import { ToastrModule } from "ngx-toastr";


//import { PresentationModule } from "./presentation/presentation.module";

//import { SectionsComponent } from "./sections/sections.component";
// { ProfilepageComponent } from "./examples/profilepage/profilepage.component";
//import { RegisterpageComponent } from "./examples/registerpage/registerpage.component";
import { AboutusComponent } from "./examples/aboutus/aboutus.component";
////import { Error500Component } from "./examples/500error/500error.component";
//import { AccountsettingsComponent } from "./examples/accountsettings/accountsettings.component";
//import { BlogpostComponent } from "./examples/blogpost/blogpost.component";
//import { BlogpostsComponent } from "./examples/blogposts/blogposts.component";
//import { ChatpageComponent } from "./examples/chatpage/chatpage.component";
//import { CheckoutpageComponent } from "./examples/checkoutpage/checkoutpage.component";
//import { ContactusComponent } from "./examples/contactus/contactus.component";
//import { EcommerceComponent } from "./examples/ecommerce/ecommerce.component";
//import { ErrorComponent } from "./examples/error/error.component";
//import { InvoicepageComponent } from "./examples/invoicepage/invoicepage.component";
//import { LoginpageComponent } from "./examples/loginpage/loginpage.component";
//import { PricingpageComponent } from "./examples/pricingpage/pricingpage.component";
//import { ProductpageComponent } from "./examples/productpage/productpage.component";
//import { ResetpageComponent } from "./examples/resetpage/resetpage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
//import { PictureUploadComponent } from "./components/picture-upload/picture-upload.component";


//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    SidenavComponent,
    FooterComponent,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent

    
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    TimepickerModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(), 
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  
}
