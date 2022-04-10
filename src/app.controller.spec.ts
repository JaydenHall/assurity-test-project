import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('name should be carbon credits', async () => {
      const response = await appController.testData();
      expect(response.data.Name).toBe('Carbon credits');
    });

    it('canRelist should be true', async () => {
      const response = await appController.testData();
      expect(response.data.CanRelist).toBe(true);
    });

    it('should return the promotion with the name Gallery and the description Good position in category', async () => {
      const response = await appController.testData();
      const promotions: Array<any> = response.data.Promotions;

      const gallery: any = promotions.find((promotion) => {
        return promotion.Name === 'Gallery';
      });
      expect(gallery.Name).toBe('Gallery');
      expect(gallery.Description).toBe('Good position in category');
    });
  });
});
