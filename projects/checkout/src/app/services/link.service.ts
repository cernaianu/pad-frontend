import {Injectable} from '@angular/core';
import {RestService} from "../../../../common/src/lib/services/rest.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LinkService extends RestService {
  get endpoint(): string {
    return `${environment.checkout_api}/links`;
  }

}
