import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private titleService: Title, private metaService: Meta) { }


  setTitle(newTitle: string) {
    this.titleService.setTitle(
      "V2Support | " + newTitle
    );
  }


  updateDescription(url: string = 'v2support.com', description: string = 'A awesome Website', author: string = 'Sahib Singh', keywords: string = 'Sahib Singh') {

    this.metaService.updateTag({ name: 'og:url', content: url })

    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'author', content: author });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
  }

}
