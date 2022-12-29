import { Controller, Get } from "@nestjs/common";
import {
  ApiExtraModels,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";

import { PaginatedDto } from "../dto/pagination.dto";
import { CustomCoopScheduleResponse } from "../dto/schedules/schedule.dto";

import { SchedulesService } from "./schedules.service";

@Controller("schedules")
@ApiExtraModels(PaginatedDto)
export class SchedulesController {
  constructor(private readonly service: SchedulesService) {}

  @Get("")
  @ApiTags("スケジュール")
  @ApiOperation({
    description: "スケジュールを一括で取得します",
    operationId: "取得",
  })
  @ApiNotFoundResponse()
  @ApiOkResponse({ type: [CustomCoopScheduleResponse] })
  find(): Promise<CustomCoopScheduleResponse[]> {
    return this.service.findAll();
  }
}
