import { Injectable, EventEmitter } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService{
    listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
    listOfPosts: Post[] = [
        // new Post(
        //   'Munnar',
        //   'Munnar - breathtakingly beautiful - a haven of peace and tranquility - the idyllic tourist destination in God s own country. Set at an altitude of 6000 ft in Idukki district, Munnar was the favored summer resort of the erstwhile British rulers in the colonial days. Unending expanse of tea plantations - pristine valleys and mountains- exotic species of flora and fauna in its wild sanctuaries and forests - aroma of spice scented cool air - yes! Munnar has all these and more.',
        //   'https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Munnar-In-December-cover_22nd-Nov.jpg',
        //   'javafsd@gmail.com',
        //   new Date(), 5)
        // ),
        // new Post(
        //   'Taj Mahal',
        //   'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal. The tomb is the centrepiece of a 17-hectare complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. Construction of the mausoleum was essentially completed in 1643 but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around 32 million rupees, which in 2015 would be approximately 52.8 billion rupees. The construction project employed some 20,000 artisans under the guidance of a board of architects led by the court architect to the emperor, Ustad Ahmad Lahauri.',
        //   'https://www.thoughtco.com/thmb/DBOgHVGLrn4Hy6OOlJxcdExAYuE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg',
        //   'javafsd@gmail.com',
        //   new Date(), 10
        // ),
        // new Post(
        //   'Hampi',
        //   'The former capital of the Vijayanagara Empire, Hampi remains an essential religious hub, housing the Virupaksha, Lakshmi Narasimha, Hemakuta Hill, Big Shivlinga and Vithala temples. The architectural ruins of Hampi are a UNESCO World Heritage Site. Rock-climbing enthusiasts will adore Hampi, considered the bouldering capital of India, and the city’s rocky landscape, dotted with ancient temple ruins, makes for a unique climbing experience.',
        //   'https://cisindus.org/wp-content/uploads/2021/07/Are-Nation-States-Neutral.jpg',
        //   'javafsd@gmail.com',
        //   new Date(), 16
        // ),
      ];

      //facility 1
      getPosts(){
        return this.listOfPosts;
      }

      //facility 2
      deletePost(index: number){
        this.listOfPosts.splice(index, 1);
      }

      //facility 3
      addPost(post: Post){
        this.listOfPosts.push(post);
      }

      //facility 4
      updatePost(index: number, post: Post){
        this.listOfPosts[index] = post;
      }

      //facility 5
      getPost(index: number){
        return this.listOfPosts[index];
      }

      //facility 6

      likePosts(index: number){
        this.listOfPosts[index].numberOfLikes += 1;
      }

      //facility 7
      setPosts(listOfPostsFromBackend: Post[]){
        this.listOfPosts = listOfPostsFromBackend;
        this.listChangedEvent.emit(listOfPostsFromBackend);
      }

}