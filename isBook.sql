SELECT rr.id FROM room_reserve as rr WHERE
   (date '2021-08-09', date '2021-08-23') OVERLAPS (rr.arrival_at, rr.departure_at) ::boolean
AND rr.room_id = 1