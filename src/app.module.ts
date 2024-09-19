import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeckSchema } from './deck/deck.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/magic'),
    MongooseModule.forFeature([{ name: 'Deck', schema: DeckSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
