import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class RoomReserve1628150282732 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'room_reserve',
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true },
                { name: "name", type: "varchar" },
                { name: "arrival_at", type: "date", isNullable: false },
                { name: "departure_at", type: "date", isNullable: false },
                { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                // { name: 'room_id', type: 'bigint' },
            ]
        }), true)

        await queryRunner.addColumn("room_reserve", new TableColumn({
            name: "room_id",
            type: "bigint"
        }));

        await queryRunner.createForeignKey("room_reserve", new TableForeignKey({
            columnNames: ["room_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "room",
            onDelete: "SET NULL"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}

}
