import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PutRequestComponent } from './components/put-request/put-request.component';
import { PutRequestTypedComponent } from './components/put-request-typed/put-request-typed.component';
import { PutRequestHeadersComponent } from './components/put-request-headers/put-request-headers.component';
import { PutRequestErrorHandlingComponent } from './components/put-request-error-handling/put-request-error-handling.component';
import { PostRequestComponent } from './components/post-request/post-request.component';
import { PostRequestTypedComponent } from './components/post-request-typed/post-request-typed.component';
import { PostRequestHeadersComponent } from './components/post-request-headers/post-request-headers.component';
import { PostRequestErrorHandlingCallbackComponent } from './components/post-request-error-handling-callback/post-request-error-handling-callback.component';
import { PostRequestErrorHandlingCatchErrorComponent } from './components/post-request-error-handling-catch-error/post-request-error-handling-catch-error.component';
import { GetRequestComponent } from './components/get-request/get-request.component';
import { GetRequestTypedComponent } from './components/get-request-typed/get-request-typed.component';
import { GetRequestErrorHandlingComponent } from './components/get-request-error-handling/get-request-error-handling.component';
import { GetRequestHeadersComponent } from './components/get-request-headers/get-request-headers.component';
import { DeleteRequestComponent } from './components/delete-request/delete-request.component';
import { DeleteRequestHeadersComponent } from './components/delete-request-headers/delete-request-headers.component';
import { DeleteRequestErrorHandlingComponent } from './components/delete-request-error-handling/delete-request-error-handling.component';

@NgModule({
  declarations: [
    AppComponent,
    PutRequestComponent,
    PutRequestTypedComponent,
    PutRequestHeadersComponent,
    PutRequestErrorHandlingComponent,
    PostRequestComponent,
    PostRequestTypedComponent,
    PostRequestHeadersComponent,
    PostRequestErrorHandlingCallbackComponent,
    PostRequestErrorHandlingCatchErrorComponent,
    GetRequestComponent,
    GetRequestTypedComponent,
    GetRequestErrorHandlingComponent,
    GetRequestHeadersComponent,
    DeleteRequestComponent,
    DeleteRequestHeadersComponent,
    DeleteRequestErrorHandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
