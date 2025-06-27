import { Movie, ContentRow } from '../types';

// Import images
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';
import img14 from '../assets/14.jpg';
import img15 from '../assets/15.jpg';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genre: ['Action', 'Crime', 'Drama'],
    year: 2008,
    rating: 'PG-13',
    duration: '2h 32m',
    thumbnail: img1,
    backdrop: img1,
    videoUrl: '/videos/dark-knight.mp4',
    trailerUrl: '/videos/dark-knight-trailer.mp4',
    likes: 1250
  },
  {
    id: '2',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    year: 2010,
    rating: 'PG-13',
    duration: '2h 28m',
    thumbnail: img2,
    backdrop: img2,
    videoUrl: '/videos/inception.mp4',
    trailerUrl: '/videos/inception-trailer.mp4',
    likes: 980
  },
  {
    id: '3',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    year: 2014,
    rating: 'PG-13',
    duration: '2h 49m',
    thumbnail: img3,
    backdrop: img3,
    videoUrl: '/videos/interstellar.mp4',
    trailerUrl: '/videos/interstellar-trailer.mp4',
    likes: 1100
  },
  {
    id: '4',
    title: 'The Matrix',
    description: 'A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.',
    genre: ['Action', 'Sci-Fi'],
    year: 1999,
    rating: 'R',
    duration: '2h 16m',
    thumbnail: img4,
    backdrop: img4,
    videoUrl: '/videos/matrix.mp4',
    trailerUrl: '/videos/matrix-trailer.mp4',
    likes: 1350
  },
  {
    id: '5',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    genre: ['Crime', 'Drama'],
    year: 1994,
    rating: 'R',
    duration: '2h 34m',
    thumbnail: img5,
    backdrop: img5,
    videoUrl: '/videos/pulp-fiction.mp4',
    trailerUrl: '/videos/pulp-fiction-trailer.mp4',
    likes: 890
  },
  {
    id: '11',
    title: 'Blade Runner 2049',
    description: 'Young Blade Runner K\'s discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.',
    genre: ['Action', 'Drama', 'Sci-Fi'],
    year: 2017,
    rating: 'R',
    duration: '2h 44m',
    thumbnail: img11,
    backdrop: img11,
    videoUrl: '/videos/blade-runner.mp4',
    trailerUrl: '/videos/blade-runner-trailer.mp4',
    likes: 750
  },
  {
    id: '12',
    title: 'Mad Max: Fury Road',
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    year: 2015,
    rating: 'R',
    duration: '2h 0m',
    thumbnail: img12,
    backdrop: img12,
    videoUrl: '/videos/mad-max.mp4',
    trailerUrl: '/videos/mad-max-trailer.mp4',
    likes: 920
  },
  {
    id: '13',
    title: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    genre: ['Crime', 'Drama'],
    year: 1972,
    rating: 'R',
    duration: '2h 55m',
    thumbnail: img13,
    backdrop: img13,
    videoUrl: '/videos/godfather.mp4',
    trailerUrl: '/videos/godfather-trailer.mp4',
    likes: 1500
  },
  {
    id: '14',
    title: 'Goodfellas',
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.',
    genre: ['Biography', 'Crime', 'Drama'],
    year: 1990,
    rating: 'R',
    duration: '2h 26m',
    thumbnail: img14,
    backdrop: img14,
    videoUrl: '/videos/goodfellas.mp4',
    trailerUrl: '/videos/goodfellas-trailer.mp4',
    likes: 1200
  },
  {
    id: '15',
    title: 'Fight Club',
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much more.',
    genre: ['Drama'],
    year: 1999,
    rating: 'R',
    duration: '2h 19m',
    thumbnail: img15,
    backdrop: img15,
    videoUrl: '/videos/fight-club.mp4',
    trailerUrl: '/videos/fight-club-trailer.mp4',
    likes: 1080
  }
];

export const featuredMovie: Movie = {
  id: 'featured-1',
  title: 'Stranger Things',
  description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
  genre: ['Drama', 'Fantasy', 'Horror'],
  year: 2016,
  rating: 'TV-14',
  duration: '51m',
  thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
  backdrop: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920',
  videoUrl: '/videos/stranger-things.mp4',
  trailerUrl: '/videos/stranger-things-trailer.mp4',
  isFeatured: true,
  likes: 2100
};

// Only keep the "Most Liked" content row, removing the second and third carousels
export const contentRows: ContentRow[] = [
  {
    id: 'most-liked',
    title: 'Most Liked',
    movies: [] // This will be populated dynamically based on likes
  }
];

export const getMostLikedMovies = (movieLikes: Record<string, number>) => {
  return movies
    .map(movie => ({
      ...movie,
      likes: movieLikes[movie.id] || movie.likes || 0
    }))
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 12);
};