import { Schema, model, models } from 'mongoose';

const MovieSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  year: { type: String, required: true },
  duration: { type: String, required: true },
  rating: { type: String, required: true },
  genres: { type: String, required: true },
  director: { type: String, required: true },
  cast: { type: String, required: true },
  summary: { type: String, required: true },
  img_link: { type: String, required: true }
});

const Movie = models.Movie || model('Movie', MovieSchema);

export default Movie;