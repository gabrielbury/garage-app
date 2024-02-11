CREATE TABLE IF NOT EXISTS public.so (
	id int NOT NULL GENERATED ALWAYS AS IDENTITY,
	customer varchar(150) NOT NULL,
	service varchar(500) NOT NULL,
	price decimal(15, 2) NOT NULL,
	CONSTRAINT so_pk PRIMARY KEY (id)
);