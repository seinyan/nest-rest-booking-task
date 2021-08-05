--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: migrations_table; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.migrations_table (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.migrations_table OWNER TO postgres;

--
-- Name: migrations_table_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.migrations_table_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_table_id_seq OWNER TO postgres;

--
-- Name: migrations_table_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.migrations_table_id_seq OWNED BY public.migrations_table.id;


--
-- Name: room; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.room (
    id integer NOT NULL,
    title character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.room OWNER TO postgres;

--
-- Name: room_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.room_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.room_id_seq OWNER TO postgres;

--
-- Name: room_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.room_id_seq OWNED BY public.room.id;


--
-- Name: room_reserve; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.room_reserve (
    id integer NOT NULL,
    name character varying NOT NULL,
    arrival_at date,
    departure_at date,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    room_id integer
);


ALTER TABLE public.room_reserve OWNER TO postgres;

--
-- Name: room_reserve_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.room_reserve_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.room_reserve_id_seq OWNER TO postgres;

--
-- Name: room_reserve_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.room_reserve_id_seq OWNED BY public.room_reserve.id;


--
-- Name: migrations_table id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations_table ALTER COLUMN id SET DEFAULT nextval('public.migrations_table_id_seq'::regclass);


--
-- Name: room id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room ALTER COLUMN id SET DEFAULT nextval('public.room_id_seq'::regclass);


--
-- Name: room_reserve id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room_reserve ALTER COLUMN id SET DEFAULT nextval('public.room_reserve_id_seq'::regclass);


--
-- Data for Name: migrations_table; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations_table (id, "timestamp", name) FROM stdin;
5	1628097477269	CreateDatabase1628097477269
6	1628097847670	Room1628097847670
7	1628150282732	RoomReserve1628150282732
\.


--
-- Data for Name: room; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.room (id, title, created_at, updated_at) FROM stdin;
1	room 1	2021-08-05 13:04:57.445026	2021-08-05 13:04:57.445026
2	ROOM 2	2021-08-05 17:49:39.804491	2021-08-05 17:49:39.804491
\.


--
-- Data for Name: room_reserve; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.room_reserve (id, name, arrival_at, departure_at, created_at, updated_at, room_id) FROM stdin;
22	string	2021-08-01	2021-08-09	2021-08-05 19:58:09.341778	2021-08-05 19:58:09.341778	1
\.


--
-- Name: migrations_table_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_table_id_seq', 7, true);


--
-- Name: room_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.room_id_seq', 15, true);


--
-- Name: room_reserve_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.room_reserve_id_seq', 22, true);


--
-- Name: room_reserve PK_6eff0d97d6616faa1b5137123a4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room_reserve
    ADD CONSTRAINT "PK_6eff0d97d6616faa1b5137123a4" PRIMARY KEY (id);


--
-- Name: room PK_c6d46db005d623e691b2fbcba23; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room
    ADD CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY (id);


--
-- Name: migrations_table PK_ecc17030357b03eb33bf5a6cea4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.migrations_table
    ADD CONSTRAINT "PK_ecc17030357b03eb33bf5a6cea4" PRIMARY KEY (id);


--
-- Name: room_reserve FK_5e151a0fd0c33165d1c37ce2e74; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.room_reserve
    ADD CONSTRAINT "FK_5e151a0fd0c33165d1c37ce2e74" FOREIGN KEY (room_id) REFERENCES public.room(id);


--
-- PostgreSQL database dump complete
--

