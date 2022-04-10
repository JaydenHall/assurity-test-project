import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Assurity!';
  }

  testData(): Promise<AxiosResponse<any>> {
    return new HttpService().axiosRef.get(
      'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false',
    );
  }
}
