import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Param('id') id: string): string {
    console.log(id);
    return this.appService.getHello(`getting the cats ${id}`);
  }

  @Post()
  postHello(@Body() data:any ,@Res() res:Response):any{
    console.log(data)
    return res.status(HttpStatus.CREATED).send("all okey")
    return this.appService.getHello(`posting the cats   ${data}`)
  }
  @Put()
  putHello(@Query() query:any ):string{
    console.log(query)
    return this.appService.getHello(`posting the cats   ${query}`)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log(id)
    return this.appService.getHello(`This action removes a #${id} cat`)
  }
}
