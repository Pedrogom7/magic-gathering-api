import { Schema } from 'mongoose';

export const DeckSchema = new Schema({
  commander: { type: String, required: true },
  cards: { type: [String], required: true },
});
