SELECT * FROM room AS r
WHERE id NOT IN (
    SELECT rr.room_id FROM room_reserve as rr
    WHERE (date '2021-08-11',  date '2021-08-23') OVERLAPS (rr.arrival_at, rr.departure_at) ::boolean
)