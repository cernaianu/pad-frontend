
import {​​​​​ Platform }​​​​​ from '@angular/cdk/platform';

import {​​​​​ Injectable }​​​​​ from '@angular/core';
import {​​​​​ MatBottomSheet }​​​​​ from '@angular/material/bottom-sheet';
import {​​​​​ timer }​​​​​ from 'rxjs';
import {​​​​​ take }​​​​​ from 'rxjs/operators';
import {​​​​​ PromptComponent }​​​​​ from '../prompt/prompt.component';
@Injectable({​​​​​
providedIn: 'root',
}​​​​​)
export class PwaService {​​​​​
private promptEvent: any;
 constructor(
private bottomSheet: MatBottomSheet,
 private platform: Platform
) {​​​​​}​​​​​
 public initPwaPrompt(): void {​​​​​
console.log('initt');
    if (this.platform.ANDROID) {​​​​​
      window.addEventListener('beforeinstallprompt', (event: any) => {​​​​​
      event.preventDefault();
      this.promptEvent = event;
      this.openPromptComponent('android');
      }​​​​​);
}​​​​​
  if (this.platform.IOS) {​​​​​
  // tslint:disable-next-line:no-string-literal
  // tslint:disable-next-line:no-string-literal
  const isInStandaloneMode =
  // tslint:disable-next-line:no-string-literal
  'standalone' in window.navigator && window.navigator['standalone'];
    if (!isInStandaloneMode) {​​​​​
    this.openPromptComponent('ios');
    }​​​​​
  }​​​​​
}​​​​​
 private openPromptComponent(mobileType: 'ios' | 'android'): void {​​​​​
timer(3000)
.pipe(take(1))
 .subscribe(() =>
      this.bottomSheet.open(PromptComponent, {​​​​​

      }​​​​​)
    );
  }​​​​​
}​​​​​
