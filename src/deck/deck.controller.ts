import { Controller, Get, Post, Body } from '@nestjs/common';
import { DeckService } from './deck.service';
import { CreateDeckDto } from './dto/create-deck.dto';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) { }

  @Get()
  getAllDecks() {
    return this.deckService.getAllDecks();
  }

  @Post()
  createDeck(@Body() createDeckDto: CreateDeckDto) {
    return this.deckService.createDeck(createDeckDto);
  }
}
