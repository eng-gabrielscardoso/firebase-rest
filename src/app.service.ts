import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  async getStatus(): Promise<string> {
    return JSON.stringify({
      environment: this.configService.get('NODE_ENV'),
      author: this.configService.get('PROJECT_AUTHOR'),
    });
  }
}
