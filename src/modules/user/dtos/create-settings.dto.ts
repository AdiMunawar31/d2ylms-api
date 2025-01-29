import { BooleanFieldOptional } from '../../../decorators/field.decorator';

export class CreateSettingsDto {
  @BooleanFieldOptional()
  isEmailVerified?: boolean;

  @BooleanFieldOptional()
  isPhoneVerified?: boolean;
}
