import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { BossResult } from './boss.dto';
import { EnemyResult } from './enemy.dto';
import { PlayerRequest } from './player.dto';
import { IntegerId, StringId } from './rawvalue.dto';
import { WaveResult } from './wave.dto';
import { Weapon } from './weapon.dto';

export enum Mode {
  REGULAR = 'REGULAR',
  PRIVATE_CUSTOM = 'PRIVATE_CUSTOM',
  PRIVATE_SCENARIO = 'PRIVATE_SCENARIO',
}

export enum Rule {
  REGULAR = 'REGULAR',
  BIG_RUN = 'BIG_RUN',
}

class Scale {
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(13)
  gold: number | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(13)
  silver: number | null;

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(13)
  bronze: number | null;
}

export class CoopHistoryDetailRequest extends StringId {
  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(3.33)
  dangerRate: number;

  @ApiPropertyOptional({ type: IntegerId })
  @IsOptional()
  @ValidateNested()
  @Type(() => IntegerId)
  afterGrade: IntegerId | null;

  @ApiProperty()
  @IsInt()
  @Min(-1)
  @Max(3)
  resultWave: number;

  @ApiProperty({ type: Date })
  @IsDateString()
  playedTime: string;

  @ApiProperty({ enum: Rule })
  @IsEnum(Rule)
  rule: Rule;

  @ApiProperty({ type: IntegerId })
  @ValidateNested()
  @Type(() => IntegerId)
  coopStage: IntegerId;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  scenarioCode: string | null;

  @ApiProperty({ type: PlayerRequest })
  @ValidateNested()
  @Type(() => PlayerRequest)
  myResult: PlayerRequest;

  @ApiProperty({ type: [PlayerRequest] })
  @ValidateNested({ each: true })
  @Type(() => PlayerRequest)
  memberResults: PlayerRequest[];

  @ApiProperty({ type: BossResult })
  @IsOptional()
  @ValidateNested()
  @Type(() => BossResult)
  bossResult: BossResult | null;

  @ApiProperty({ type: [EnemyResult], maxItems: 14, minItems: 14 })
  @ValidateNested({ each: true })
  @Type(() => EnemyResult)
  enemyResults: EnemyResult[];

  @ApiProperty({ type: [WaveResult], maxItems: 3, minItems: 3 })
  @ValidateNested({ each: true })
  @Type(() => WaveResult)
  waveResults: WaveResult[];

  @ApiProperty({ type: [Weapon], maxItems: 3, minItems: 3 })
  @ValidateNested({ each: true })
  @Type(() => Weapon)
  weapons: Weapon[];

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(999)
  afterGradePoint: number | null;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  jobPoint: number | null;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  jobScore: number | null;

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
  @Max(100)
  jobBonus: number | null;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5)
  smellMeter: number | null;

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => Scale)
  scale: Scale;

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => StringId)
  nextHistoryDetail: StringId | null;

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => StringId)
  previousHistoryDetail: StringId | null;
}
