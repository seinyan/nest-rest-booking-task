import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Room1628097847670 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(new Table({
      name: 'room',
      columns: [
        { name: "id", type: "int", isPrimary: true, isGenerated: true },
        { name: "title", type: "varchar" },
        { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
        { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
      ]
    }), true)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
