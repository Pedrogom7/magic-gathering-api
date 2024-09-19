import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deck } from './interfaces/deck.interface';

@Injectable()
export class DeckService {
  constructor(@InjectModel('Deck') private deckModel: Model<Deck>) { }

  async createDeck(deckData: Deck): Promise<Deck> {
    const createdDeck = new this.deckModel(deckData);
    return createdDeck.save();
  }

  async getAllDecks(): Promise<Deck[]> {
    return this.deckModel.find().exec();
  }
}
