import { SafeUrl } from "@angular/platform-browser";

export interface UserPfobj {
    uid: string;
    nid: string;
    username: string;
    password: string;
    age: number;
    address: string;
    roles: string;
    img: SafeUrl;
  }