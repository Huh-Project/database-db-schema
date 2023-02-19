import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { UserSeed } from "../seed/user.seed";
import { hash } from "bcrypt";
import { Users } from "../entity/users.entitiy";

export class seedUser9999999999901 implements MigrationInterface {
  name = "seedUser9999999999901";

  public async up(queryRunner: QueryRunner): Promise<any> {
    const userRepository = getRepository<Users>("users");

    const userSeed = userRepository.create(UserSeed);
    userSeed.password = userSeed.password;
    await userRepository.save(userSeed);
  }

  public async down(_: QueryRunner): Promise<any> {}
}
