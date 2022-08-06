
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" serial primary key,
    "name" varchar(25) not null,
    "username" varchar(80) unique not null,
    "password" varchar(1000) not null
);

create table "history" (
	"id" serial primary key,
	"user_id" int not null,
	"date_created" timestamp not null default current_timestamp,
	"feeling" text not null,
	"reflection" text not null,
	"gratitude1" varchar(140),
	"gratitude2" varchar(140),
	"gratitude3" varchar(140)
);

insert into "history" ("user_id", "date_created", "feeling", "reflection", "gratitude1", "gratitude2", "gratitude3")
values 
(1, current_timestamp, '😊', 'I had a great day!', 'glad for today!', 'a stranger said hello!', 'found my keys!')
;

--select from history
select * from history;
select * from history where user_id = 1;

--to_char => convert to Sat Aug 7, 22 - 03:51 PM
select to_char(history.date_created, 'Dy Mon d, yy - hh12:mi AM')
from "history";

--date/time
select current_date as today_date, current_time as time_now;
select current_timestamp;

--timestamp
select now();

--month, day, year
select extract(month from now()::date) as month;
select extract(day from now()::date) as day;
select extract(year from now()::date) as year;

--timeofday
select timeofday();

--extract
--to_char(date_column, 'mm-dd-yyyy')
--Sun Dec 8, 12:00 AM
select to_char(history.date_created, 'Dy Mon d, yy - hh12:mi AM')
from "history";


