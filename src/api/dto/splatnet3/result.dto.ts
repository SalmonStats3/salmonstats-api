import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from "class-validator";

import { CoopDataRequest } from "./data.dto";
import { Species } from "./player.dto";
import { CustomCoopScheduleRequest } from "./schedule.dto";

export class CoopResultRequest {
  @ApiProperty({ type: CoopDataRequest, description: "データ" })
  @ValidateNested()
  @Type(() => CoopDataRequest)
  data: CoopDataRequest;
}

class CustomCoopTextColorRequest {
  @ApiProperty()
  r: number;
  @ApiProperty()
  g: number;
  @ApiProperty()
  b: number;
  @ApiProperty()
  a: number;
}

class CustomCoopNameBackgroundRequest {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: CustomCoopTextColorRequest })
  textColor: CustomCoopTextColorRequest;
}

class CustomCoopNamePlateRequest {
  @ApiProperty({ maxItems: 3, minItems: 3, type: [Number] })
  badges: (number | null)[];

  @ApiProperty({ type: CustomCoopNameBackgroundRequest })
  background: CustomCoopNameBackgroundRequest;
}

class CustomCoopPlayerRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  pid: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  bossKillCountsTotal: number;

  @ApiProperty({ maxItems: 14, minItems: 14, type: [Number] })
  @IsArray()
  @ArrayMaxSize(14)
  @ArrayMinSize(14)
  @Transform((param) => param.value.slice(0, -1))
  bossKillCounts: number[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  byname: string;

  @ApiProperty({ maxItems: 4, minItems: 3, type: [Number] })
  @IsArray()
  @ArrayMinSize(0)
  @ArrayMaxSize(4)
  specialCounts: number[];

  @ApiProperty()
  @IsBoolean()
  isMyself: boolean;

  @ApiProperty({ type: CustomCoopNamePlateRequest })
  @ValidateNested()
  @Type(() => CustomCoopNamePlateRequest)
  nameplate: CustomCoopNamePlateRequest;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  specialId: number | null;

  @ApiProperty()
  @IsInt()
  @Min(0)
  helpCount: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  deadCount: number;

  @ApiProperty({ maxItems: 4, minItems: 3, type: [Number] })
  @IsArray()
  @ArrayMinSize(0)
  @ArrayMaxSize(4)
  weaponList: number[];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nameId: string;

  @ApiProperty()
  @IsEnum(Species)
  species: Species;

  @ApiProperty()
  @IsInt()
  uniform: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  goldenIkuraNum: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  ikuraNum: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  goldenIkuraAssistNum: number;
}

class CustomCoopJobResultRequest {
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isClear: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isBossDefeated: boolean | null;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  bossId: number | null;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  failureWave: number | null;
}

class CustomCoopWaveRequest {
  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(4)
  id: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(8)
  eventType: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(35)
  quotaNum: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  goldenIkuraNum: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  @Max(2)
  waterLevel: number;

  @ApiProperty()
  @IsInt()
  @Min(0)
  goldenIkuraPopNum: number;

  @ApiProperty()
  @IsBoolean()
  isClear: boolean;
}

export class CustomCoopResultRequest {
  @ApiProperty({ type: CustomCoopScheduleRequest })
  @ValidateNested()
  @Type(() => CustomCoopScheduleRequest)
  schedule: CustomCoopScheduleRequest;

  @ApiProperty({ maxItems: 14, minItems: 14, type: [Number] })
  @ArrayMinSize(14)
  @ArrayMaxSize(14)
  @Transform((param) => param.value.slice(0, -1))
  bossKillCounts: number[];

  @ApiProperty({ maxItems: 14, minItems: 14, type: [Number] })
  @ArrayMinSize(14)
  @ArrayMaxSize(14)
  @Transform((param) => param.value.slice(0, -1))
  bossCounts: number[];

  @ApiProperty()
  @IsInt()
  ikuraNum: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(3.25)
  jobRate: number | null;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  jobBonus: number | null;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  jobScore: number | null;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  gradeId: number | null;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  gradePoint: number | null;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  kumaPoint: number | null;

  @ApiProperty({ type: [CustomCoopPlayerRequest] })
  @ValidateNested({ each: true })
  @Type(() => CustomCoopPlayerRequest)
  otherResults: CustomCoopPlayerRequest[];

  @ApiProperty({ type: CustomCoopPlayerRequest })
  @ValidateNested()
  @Type(() => CustomCoopPlayerRequest)
  myResult: CustomCoopPlayerRequest;

  @ApiProperty({
    example: "20230122T152648_be77aee0-e3fe-48f9-9b1e-5bf68f535a02",
    description: "固有のID",
  })
  @IsString()
  @IsNotEmpty()
  @Transform((params) => {
    const regexp = /\d{8}T\d{6}_[a-f0-9\-]{36}/;
    const match: string[] | null = params.value.match(regexp);
    return match[0];
  })
  id: string;

  @ApiProperty({
    format: "uuid",
    example: "be77aee0-e3fe-48f9-9b1e-5bf68f535a02",
    description: "ホストのUUID?",
  })
  @IsString()
  @IsNotEmpty()
  uuid: string;

  @ApiProperty({ type: [CustomCoopWaveRequest] })
  @ValidateNested({ each: true })
  @Type(() => CustomCoopWaveRequest)
  waveDetails: CustomCoopWaveRequest[];

  @ApiProperty()
  @IsInt()
  @Min(0)
  goldenIkuraNum: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(3.33)
  dangerRate: number;

  @ApiProperty({ type: Date })
  @IsDateString()
  playTime: string;

  @ApiPropertyOptional({ description: "シナリオコード", example: "XXXX-XXXX-XXXX-XXXX" })
  @IsOptional()
  @IsString()
  scenarioCode: string | null;

  @ApiProperty()
  @IsInt()
  goldenIkuraAssistNum: number;

  @ApiProperty({ type: [Number] })
  @IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(3)
  scale: (number | null)[];

  @ApiProperty({ type: CustomCoopJobResultRequest })
  @ValidateNested()
  @Type(() => CustomCoopJobResultRequest)
  jobResult: CustomCoopJobResultRequest;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5)
  smellMeter: number | null;
}
