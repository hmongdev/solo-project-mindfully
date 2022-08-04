
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--%a %b %e, %I:%i %p
--Sun Dec 8, 12:00 AM

CREATE TABLE "user" (
    "id" serial primary key,
    "name" varchar(25) not null,
    "username" varchar(80) unique not null,
    "password" varchar(1000) not null
);

CREATE TABLE "feeling" (
    "id" serial primary key,
    "emoji" varchar(25) not null,
    "description" varchar(15) not null
);

create table "history" (
	"id" serial primary key,
	"user_id" int references "user",
	"date_created" date not null,
	"reflection" text not null,
	"feeling_id" int references "feeling",
	"gratitude1" varchar(140),
	"gratitude2" varchar(140),
	"gratitude3" varchar(140)
);

insert into "feeling" ("emoji", "description")
values 
('😊', 'Happy'),
('😁', 'Excited'),
('😇', 'Grateful'),
('😌', 'Relaxed'),
('🙂', 'Content'),
('😮‍💨', 'Tired'),
('🤔', 'Unsure'),
('🥱', 'Bored'),
('😰', 'Anxious'),
('😡', 'Angry'),
('😖', 'Stressed'),
('😞', 'Sad')
;