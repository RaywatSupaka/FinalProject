import { SafeUrl } from "@angular/platform-browser";

export interface WebData {
    wid: string;
    wname: string;
    local: string;
    status: number;
    type: string;
    description: string;
    img: SafeUrl;
  }