/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CopWhereInput } from "./CopWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CopOrderByInput } from "./CopOrderByInput";

@ArgsType()
class CopFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CopWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CopWhereInput, { nullable: true })
  @Type(() => CopWhereInput)
  where?: CopWhereInput;

  @ApiProperty({
    required: false,
    type: [CopOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CopOrderByInput], { nullable: true })
  @Type(() => CopOrderByInput)
  orderBy?: Array<CopOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CopFindManyArgs as CopFindManyArgs };
