import { AbstractDto } from '../../../common/dto/abstract.dto';
import { RoleType } from '../../../constants/role-type';
import {
  BooleanFieldOptional,
  EmailFieldOptional,
  EnumFieldOptional,
  NumberFieldOptional,
  PhoneFieldOptional,
  StringFieldOptional,
} from '../../../decorators/field.decorator';
import type { UserEntity } from '../user.entity';

// TODO, remove this class and use constructor's second argument's type
export type UserDtoOptions = Partial<{ isActive: boolean }>;

export class UserDto extends AbstractDto {
  @StringFieldOptional({ nullable: true })
  firstName?: string | null;

  @StringFieldOptional({ nullable: true })
  lastName?: string | null;

  @StringFieldOptional({ nullable: true })
  username!: string;

  @StringFieldOptional({ nullable: true })
  social_auth_provider?: string | null;

  @EnumFieldOptional(() => RoleType)
  role?: RoleType;

  @EmailFieldOptional({ nullable: true })
  email?: string | null;

  @StringFieldOptional({ nullable: true })
  avatar?: string | null;

  @PhoneFieldOptional({ nullable: true })
  phone?: string | null;

  @NumberFieldOptional()
  points!: number

  @BooleanFieldOptional()
  isActive?: boolean;

  constructor(user: UserEntity, options?: UserDtoOptions) {
    super(user);
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.social_auth_provider = user.social_auth_provider;
    this.role = user.role;
    this.email = user.email;
    this.avatar = user.avatar;
    this.phone = user.phone;
    this.points = user.points;
    this.isActive = options?.isActive;
  }
}
