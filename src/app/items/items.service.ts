import { Injectable } from '@angular/core';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsCurrentUser: Items[] = [];
  items: Items[] = [];
  constructor() { }



  loadDataReservedByCurrentUser(): void {
    this.itemsCurrentUser = [
      {
        headline: "headline",
        href: "https://www.example.com",
        hrefImg: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cumque ut deserunt aspernatur libero quibusdam earum sequi accusamus impedit vel obcaecati suscipit quae, exercitationem, eaque quas. Debitis accusantium in nostrum sapiente est velit dolor eius ipsam amet et? Rem natus error dicta mollitia doloribus. Voluptas blanditiis sequi minima aliquam cumque?"
      }]
  }

  loadAllData(): void {

    this.items = [
      {
        headline: "headline",
        href: "https://www.example.com",
        hrefImg: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cumque ut deserunt aspernatur libero quibusdam earum sequi accusamus impedit vel obcaecati suscipit quae, exercitationem, eaque quas. Debitis accusantium in nostrum sapiente est velit dolor eius ipsam amet et? Rem natus error dicta mollitia doloribus. Voluptas blanditiis sequi minima aliquam cumque?"
      },
      {
        headline: "headline2",
        href: "www.example.com",
        hrefImg: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cumque ut deserunt aspernatur libero quibusdam earum sequi accusamus impedit vel obcaecati suscipit quae, exercitationem, eaque quas. Debitis accusantium in nostrum sapiente est velit dolor eius ipsam amet et? Rem natus error dicta mollitia doloribus. Voluptas blanditiis sequi minima aliquam cumque?"
      },
      {
        headline: "headline3",
        href: "www.example.com",
        hrefImg: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cumque ut deserunt aspernatur libero quibusdam earum sequi accusamus impedit vel obcaecati suscipit quae, exercitationem, eaque quas. Debitis accusantium in nostrum sapiente est velit dolor eius ipsam amet et? Rem natus error dicta mollitia doloribus. Voluptas blanditiis sequi minima aliquam cumque?"
      },
      {
        headline: "headline",
        href: "https://www.example.com",
        hrefImg: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cumque ut deserunt aspernatur libero quibusdam earum sequi accusamus impedit vel obcaecati suscipit quae, exercitationem, eaque quas. Debitis accusantium in nostrum sapiente est velit dolor eius ipsam amet et? Rem natus error dicta mollitia doloribus. Voluptas blanditiis sequi minima aliquam cumque?"
      },
      {
        headline: "headline2",
        href: "www.example.com",
        hrefImg: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cumque ut deserunt aspernatur libero quibusdam earum sequi accusamus impedit vel obcaecati suscipit quae, exercitationem, eaque quas. Debitis accusantium in nostrum sapiente est velit dolor eius ipsam amet et? Rem natus error dicta mollitia doloribus. Voluptas blanditiis sequi minima aliquam cumque?"
      },
      {
        headline: "headline3",
        href: "www.example.com",
        hrefImg: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cumque ut deserunt aspernatur libero quibusdam earum sequi accusamus impedit vel obcaecati suscipit quae, exercitationem, eaque quas. Debitis accusantium in nostrum sapiente est velit dolor eius ipsam amet et? Rem natus error dicta mollitia doloribus. Voluptas blanditiis sequi minima aliquam cumque?"
      }
    ]
  }
}
