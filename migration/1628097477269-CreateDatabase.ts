import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDatabase1628097477269 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // queryRunner.connection.query('CREATE DATABASE nest_rest IF NOT EXISTS');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
