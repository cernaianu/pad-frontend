import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {RestService} from "../../../../common/src/lib/services/rest.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends RestService {
  get endpoint(): string {
    return `${environment.admin_api}/products`;
  }
}
