SELECT * FROM room AS r
WHERE id NOT IN (
    SELECT rr.room_id FROM room_reserve as rr
    WHERE (date '2021-08-11',  date '2021-08-23') OVERLAPS (rr.arrival_at, rr.departure_at) ::boolean
)

SELECT * FROM room as r
 LEFT JOIN room_reserve rr on r.id = rr.room_id
WHERE NOT (date '2021-08-11',  date '2021-08-23') OVERLAPS (rr.arrival_at, rr.departure_at) ::boolean
OR rr.arrival_at IS NULL