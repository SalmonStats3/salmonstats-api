import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";

import { CoopHistoryDetailRequest } from "./coop_history_detail.dto";

export class CoopDataRequest {
  @ApiProperty({ description: "バイト詳細" })
  @ValidateNested()
  @Type(() => CoopHistoryDetailRequest)
  coopHistoryDetail: CoopHistoryDetailRequest;
}
