//מאפינים לאוביקט פעולה לביצוע
export class BookModel {
  id!: number;
  name!: string;
  author!: string;
  genre!: string;
  image!: string;
  likes!: number;

  constructor(
    id: number,
    name: string,
    author: string,
    genre: string,
    image: string,
    likes = 0
  ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.image = image;
    this.likes = likes;
  }
}
